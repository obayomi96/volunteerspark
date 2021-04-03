import express from 'express';
import UserController from '../controllers/UserController';

const { VolunteerLogin, VolunteerSignup } = UserController;

const userRoute = express();

userRoute.post('/signup', VolunteerSignup);
userRoute.post('/login', VolunteerLogin);

export default userRoute;
