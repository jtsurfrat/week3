import * as express from 'express';

let router = express.Router();

function validateProductId(req, res, next){
  let productId = parseInt(req.params['id']);

  if(!productId){
    next('Invalid product Id')
  } else {
    res.locals.productId = productId;
    next();
  }
}
router.get("/productName/:id", validateProductId, (req, res) => {
  let productId = res.locals.productId;
  res.send(`Displaying name for product id: ${productId}`);
});

router.get("/productPrice/:id", validateProductId, (req, res) => {
  let productId = res.locals.productId;
  res.send(`Displaying name for product price id: ${productId}`);
});

router.use((err:Error, req, res, next) => {
  res.send("Error: Could not display product information");
  console.error(err);
});

export default router;






///stuff
