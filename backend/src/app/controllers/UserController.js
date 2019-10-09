const User = require("../models/User");

class UserController {
  async store(req, res) {
    try {
      const { email } = req.body;

      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.json(userExists);
      }

      const user = await User.create({ email });
      return res.json(user);
    } catch (err) {
      res.status(400).send({ error: "Error" });
    }
  }
}

module.exports = new UserController();
