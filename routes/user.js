import express from 'express';
import { getUsers, createUser, deleteUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.post('/', createUser);

userRouter.delete('/', deleteUser);

export default userRouter;