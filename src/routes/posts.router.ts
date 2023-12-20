import express from 'express';
import { getPosts } from '../controllers/posts.controller';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);

export default postsRouter;
