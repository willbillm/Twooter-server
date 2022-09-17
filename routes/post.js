import express from 'express';

import { getPosts, createPost, deletePost } from '../controllers/post.js';

const postRouter = express.Router();

postRouter.get('/', getPosts);

postRouter.post('/', createPost);

postRouter.delete('/', deletePost);

export default postRouter;