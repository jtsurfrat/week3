import * as express from "express";

let router = express.Router();

router.use((req, res, next) => {
  console.log("invoking actors route");
  next();
});

router.get("/list", (req, res, next) => {
  res.send("Displaying list of actors");
});

router.get("/details", (req, res, next) => {
  res.send("Displaying details for one actor")
})

export default router;
