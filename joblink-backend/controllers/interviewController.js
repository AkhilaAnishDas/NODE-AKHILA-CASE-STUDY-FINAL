const Interview = require("../models/Interview");

const scheduleInterview = async (req, res) => {
    try {
        const {
            candidate,
            employer,
            job,
            date,
            meetingLink
        } = req.body;

        if (!candidate || !employer || !job || !date || !meetingLink) {
            return res.status(400).json({
                message: "Candidate, employer, job, date and meeting link are required"
            });
        }

        const interview = await Interview.create({
            candidate,
            employer,
            job,
            date,
            meetingLink
        });

        res.status(201).json({
            message: "Interview scheduled successfully",
            interview
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to schedule interview",
            error: error.message
        });
    }
};

const getMyInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find({
            $or: [
                { candidate: req.user.id },
                { employer: req.user.id }
            ]
        })
            .populate("candidate", "name email")
            .populate("employer", "name email")
            .populate("job", "title company")
            .sort({ date: 1 });

        res.status(200).json({
            message: "Interviews retrieved successfully",
            count: interviews.length,
            interviews
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve interviews",
            error: error.message
        });
    }
};

const updateInterviewStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const interview = await Interview.findById(req.params.id);

        if (!interview) {
            return res.status(404).json({
                message: "Interview not found"
            });
        }

        interview.status = status;
        await interview.save();

        res.status(200).json({
            message: "Interview status updated successfully",
            interview
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update interview",
            error: error.message
        });
    }
};

module.exports = {
    scheduleInterview,
    getMyInterviews,
    updateInterviewStatus
};