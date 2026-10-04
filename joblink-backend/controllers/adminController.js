const User = require("../models/User");
const Job = require("../models/Job");

// ==================== GET ALL USERS ====================

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
            .select("-password")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "All users retrieved successfully",
            count: users.length,
            users
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve users",
            error: error.message
        });
    }
};

// ==================== GET ALL JOBS ====================

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find()
            .populate("employer", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "All jobs retrieved successfully",
            count: jobs.length,
            jobs
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve jobs",
            error: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getAllJobs
};