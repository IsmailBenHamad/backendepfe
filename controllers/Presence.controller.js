const Presence = require('../models/Presence');

const presenceController = {
  createPresence: async (req, res) => {
    try {
      const { moduleId, sessions } = req.body;
      const presence = await Presence.create({ moduleId, sessions });
      res.status(201).json(presence);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Other controller methods for CRUD operations on presence records...
};

module.exports = presenceController;
