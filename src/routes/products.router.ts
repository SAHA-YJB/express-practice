import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.post('/', createProduct);
productsRouter.get('/', getProducts);
productsRouter.get('/:productId', getProductById);
productsRouter.put('/:productId', updateProduct);
productsRouter.delete('/:productId', deleteProduct);

export default productsRouter;
