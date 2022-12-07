import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching example data from server");
});

router.post("/:id", (_req, res) => {
  res.send("Posting example");
});

export default router;
