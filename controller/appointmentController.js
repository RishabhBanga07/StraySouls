const Appointment = require('../models/Appointment');
const Report = require('../models/Report');

exports.bookAppointment = async (req, res) => {
    try {
        const { reportId, date, message } = req.body;
        
        // req.user is set by auth middleware
        const userId = req.user.id;

        // Verify report exists
        const report = await Report.findById(reportId);
        if (!report) {
            return res.status(404).json({ error: 'Animal report not found' });
        }

        const newAppointment = new Appointment({
            user: userId,
            report: reportId,
            date,
            message
        });

        await newAppointment.save();

        res.status(201).json({ 
            message: 'Appointment booked successfully', 
            appointment: newAppointment 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error booking appointment' });
    }
};

exports.getUserAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id })
            .populate('report')
            .sort({ date: 1 });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: 'Server error fetching appointments' });
    }
};
