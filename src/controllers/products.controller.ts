import { NextFunction, Response, Request } from 'express';
import Product from '../models/products.model';

// Create
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error: unknown) {
    next(error);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (error: unknown) {
    next(error);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const idProduct = await Product.findById(req.params.productId);
    if (idProduct) {
      res.status(200).json(idProduct);
    } else {
      res.status(404).send();
    }
  } catch (error: unknown) {
    next(error);
  }
};

export { createProduct, getProducts, getProductById };
