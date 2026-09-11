import { Router } from 'express';

const router = Router();

router.get("/", (req,res) => {
  res.send('API is available!'); //default status code is 200 OK
});

router.get("/crash", (req, res, next) => {
  next(new Error("Database connection failed."));
});

router.get("/bad-request", (req, res, next) => {
  const err = new Error("Client-side data is missing.");
  err.status = 400;
  next(err);
});

export default router;