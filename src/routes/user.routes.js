import { Router } from "express";
import {
    loginUser,
    logoutUser,
    registerUser,
    refreshAccessToken,
  
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";


const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

//secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);




export default router;
