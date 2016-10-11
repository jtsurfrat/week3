import * as express from 'express'

// create router object
let router = express.Router();

let products = [
  {id:1, name:'Coffee'},
  {id:2, name:'Cheese'},
  {id:3, name:'Tesla'}
];

// get all of the products
router.get("/", (req, res) => {
  res.send(products);
});

// get a count of all products
router.get("/count", (req, res) => {
  res.send(products.length.toString());
});

// get product details of one product
router.get("/details/:id", (req, res) => {
  let productId = req.params['id'];
  let product = products.filter((product) => product.id == productId);

    if(!product.length){
      res.status(404).send(`Could not find product the id of ${productId}`);
    } else {
      res.send(`You want to see the details for the ${product[0].name} product`);
    }
})







export default router;
