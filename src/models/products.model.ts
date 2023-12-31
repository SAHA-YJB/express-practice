import { Schema, model } from 'mongoose';

// required: true -> 필수값
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
});

const Product = model('Product', productSchema);

export default Product;
