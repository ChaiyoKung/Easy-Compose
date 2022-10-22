const express = require("express");
const User = require("../models/User");
const router = express.Router();

// GET: Read all user
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    return res.send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// GET: Read user
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    return res.send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// POST: Create user
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const user = await new User(data).save();

    return res.send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// PUT: Update user
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const user = await User.findByIdAndUpdate(userId, data, { new: true });

    return res.send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// DELETE: Delete user
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);

    return res.send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
