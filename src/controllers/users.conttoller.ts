import { Request, Response } from 'express';
import { Users } from '../models/users.model';

const getUsers = (req: Request, res: Response) => {
  res.json(Users);
};

const getUser = (req: Request, res: Response) => {
  // 숫자로변환하기
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const createUser = (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400).send('name이 없습니다.');
    return;
  }
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  Users.push(newUser);
  res.status(201).json(newUser);
};

export { getUsers, getUser, createUser };
