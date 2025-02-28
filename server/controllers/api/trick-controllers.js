import express from 'express';
const router = express.Router();

import models from "../../seeders/Trick-Seeders/models/index.js";
const { TrickData } = models;

// get all tricks
router.get("/", (req, res) => {
  TrickData.find({})
    .then((dbTrickData) => res.json(dbTrickData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
// get one trick
router.get("/:id", ({ params }, res) => {
  TrickData.findOne({ _id: params.id })
    .then((dbTrickData) => {
      // if no trick is found, send 404
      if (!dbTrickData) {
        res.status(404).json({ message: "No Trick with that Id" });
        return;
      }
      // if found
      res.json(dbTrickData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
// create trick
router.post("/", ({ body }, res) => {
  TrickData.create(body)
    .then((dbTrickData) => res.json(dbTrickData))
    .catch((err) => res.status(400).json(err));
});
router.put("/:id", ({ params, body }, res) => {
  TrickData.findOneAndUpdate({ _id: params.id }, body, { new: true }).then(
    (dbTrickData) => {
      if (!dbTrickData) {
        res.status(404).json({ message: "No Trick with that Id" });
        return;
      }
      res.json(dbTrickData);
    }
  );
});
// delete trick
router.delete("/:id", ({ params }, res) => {
  TrickData.findOneAndDelete({ _id: params.id })
    .then((dbTrickData) => {
      if (!dbTrickData) {
        res.status(404).json({ message: "No Trick found with that id" });
        return;
      }
      res.json(dbTrickData);
    })
    .catch((err) => res.status(400).json(err));
});

export default router;
