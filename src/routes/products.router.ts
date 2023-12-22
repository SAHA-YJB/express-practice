import express from 'express';
import {
  createProduct,
  getProductById,
  getProducts,
} from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.post('/', createProduct);
productsRouter.get('/', getProducts);
productsRouter.get('/:productId', getProductById);

export default productsRouter;
