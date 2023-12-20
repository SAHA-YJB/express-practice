import { Request, Response } from 'express';

const getPosts = (req: Request, res: Response) => {
  res.send(`<div><h1>SAHA HI</h1><div>`);
};

export { getPosts };
