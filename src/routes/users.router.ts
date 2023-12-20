import express from 'express';
import { createUser, getUser, getUsers } from '../controllers/users.conttoller';

const usersRouter = express.Router();

//유저 목록 조회 API
usersRouter.get('/', getUsers);
//유저 상세 조회 API
usersRouter.get('/:userId', getUser);
// 유저 생성 API
usersRouter.post('/', createUser);

export default usersRouter;
