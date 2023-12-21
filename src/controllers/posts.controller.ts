import { Request, Response } from 'express';
import path from 'path';

const getPosts = (req: Request, res: Response) => {
  // res.send(`<div><h1>SAHA HI</h1><div>`);
  res.sendFile(
    path.join(__dirname, '..', '..', 'public', 'images', 'tail.png')
  );
};

export { getPosts };
