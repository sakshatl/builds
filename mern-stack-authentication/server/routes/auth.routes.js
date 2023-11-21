import express from 'express';
import { loginPOST, signupGET, signupPOST } from '../controllers/auth.controllers.js';

const router = express.Router();

router
  .route('/signup')
  .get(signupGET)
  .post(signupPOST)

router
  .route('/login')
  .post(loginPOST)

export default router;