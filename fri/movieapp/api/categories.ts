import * as express from 'express';

import Category from '../models/categoryModel';

let router = express.Router();

// get all categories

router.get('/', (req, res) => {
  Category.find().populate('movies').then((categories) => {
    res.json(categories);
  }).catch((err) => {
    res.status(500);
    console.error(err);
  })
})
