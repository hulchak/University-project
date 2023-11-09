import express from "express";

import db from "../db/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let result = await collection.insertOne(req.body);
  res.send(result).status(204);
});

router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

export default router;
