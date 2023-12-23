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
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (error) {
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
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let updateProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (updateProduct) {
      res.status(200).json(updateProduct);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let deleteProduct = await Product.findByIdAndDelete(req.params.productId);
    if (deleteProduct) {
      res.status(200).json(deleteProduct);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
};

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
