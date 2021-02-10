import express from 'express';
import UserController from '../controllers/UserController';

const {
  signUp,
  login,
} = UserController;

const userRoute = express();

userRoute.post('/register', signUp);
userRoute.post('/login', login);

export default userRoute;
