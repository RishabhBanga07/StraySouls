const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');
const auth = require('../middlewares/auth');

// All routes here are protected
router.post('/', auth, appointmentController.bookAppointment);
router.get('/', auth, appointmentController.getUserAppointments);

module.exports = router;
