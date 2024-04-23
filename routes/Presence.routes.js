const express = require('express');
const router = express.Router();
const presenceController = require('../controllers/Presence.controller');

router.post('/presence', presenceController.createPresence);



module.exports = router;
