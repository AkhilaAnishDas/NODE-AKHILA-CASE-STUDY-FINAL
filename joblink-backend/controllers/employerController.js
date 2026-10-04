const Job = require("../models/Job");
const Application = require("../models/Application");

// ==================== MY JOBS ====================

const getMyJobs = async (req, res) => {
    try {
        const jobs = await Job.find({
            employer: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "Employer jobs retrieved successfully",
            count: jobs.length,
            jobs
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve employer jobs",
            error: error.message
        });
    }
};

// ==================== APPLICATIONS RECEIVED ====================

const getReceivedApplications = async (req, res) => {
    try {
        const jobs = await Job.find({
            employer: req.user.id
        }).select("_id");

        const jobIds = jobs.map(job => job._id);

        const applications = await Application.find({
            job: { $in: jobIds }
        })
            .populate("job", "title company location")
            .populate("applicant", "name email")
            .populate("resume")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Received applications retrieved successfully",
            count: applications.length,
            applications
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve received applications",
            error: error.message
        });
    }
};

module.exports = {
    getMyJobs,
    getReceivedApplications
};