const express = require('express');
const router = express.Router();
const reportController = require('../controller/reportController');
const upload = require('../middlewares/upload');

router.get('/', reportController.getReports);
router.post('/', upload.single('image'), reportController.createReport);

module.exports = router;
