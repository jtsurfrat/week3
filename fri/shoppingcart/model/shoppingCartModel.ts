import * as mongoose from 'mongoose';

export interface ICartItem {
  productName: string;
  price: number;
}

export interface IShoppingCart extends mongoose.Document {
  username:string;
  items: ICartItem[];
}

let cartItemSchema = new mongoose.Schema({
  productName:String,
  price:Number
});

let shoppingCartSchema = new mongoose.Schema({
  username: String,
  items: [cartItemSchema]
});

export default mongoose.model<IShoppingCart>('ShoppingCart', shoppingCartSchema);
