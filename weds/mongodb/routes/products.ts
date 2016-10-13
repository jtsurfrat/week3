import * as express from 'express';
import database from '../db'
import * as mongodb from 'mongodb';

let router = express.Router();

// get product id
router.get("/:id", (req, res) =>{
  let productId = new mongodb.ObjectID(req.params['id']);
  //res.send(productId);
  database.db.collection('products').findOne(productId).then((product) =>{
    //console.log(req.params)
    res.json(product);
  })
})

router.get("/",(req, res) => {
  database.db.collection('products').find().toArray().then((products) => {
    res.json(products);
  })
});
// Post products
router.post("/", (req, res) => {
  let product = req.body;
  // for put request
  product._id = new mongodb.ObjectID(product._id);
  database.db.collection('products').save(product).then((newProduct) => {
    res.send("success");
  })
});

// delete a product

router.delete("/:id", (req, res) =>{
  let productId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('products').remove({_id: productId}).then(() => {
    res.sendStatus(200);
  })
});

// Post/Put Product




export default router;
