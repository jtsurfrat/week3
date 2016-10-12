import * as express from 'express';

let router = express.Router();

let actors = [
  {firstName: 'Harrison', lastName: 'Ford'},
  {firstName: 'Sigourney', lastName: 'Weaver'},
  {firstName: 'Bill', lastName: 'Murray'}
];

router.get("/", (req, res) => {
  res.json(actors);
});

router.post("/", (req, res) => {
  let newActor = req.body;
  actors.push(newActor);
  res.sendStatus(201);
})

export default router;
