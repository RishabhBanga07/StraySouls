const Report = require('../models/Report');

// Get all reports
exports.getReports = async (req, res) => {
    try {
        const reports = await Report.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new report
exports.createReport = async (req, res) => {
    try {
        const { lat, lng, address, animalType, urgency, description } = req.body;

        const newReport = new Report({
            image: req.file ? req.file.path : '',
            location: {
                lat: parseFloat(lat),
                lng: parseFloat(lng),
                address
            },
            animalType,
            urgency,
            description
        });

        await newReport.save();

        // Emit real-time event if io is passed or available globally
        // For now, we'll need to handle io differently or pass it to the controller
        // A common pattern is to attach io to req in middleware
        if (req.io) {
            req.io.emit('new-report', newReport);
        }

        res.status(201).json(newReport);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
