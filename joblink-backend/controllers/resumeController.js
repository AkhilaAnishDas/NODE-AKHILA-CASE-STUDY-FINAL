const Resume = require("../models/Resume");

// ==================== UPLOAD RESUME ====================

const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a resume"
            });
        }

        const resume = await Resume.create({
            user: req.user.id,
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path
        });

        res.status(201).json({
            message: "Resume uploaded successfully",
            resume
        });
    } catch (error) {
        res.status(500).json({
            message: "Resume upload failed",
            error: error.message
        });
    }
};

// ==================== GET MY RESUMES ====================

const getMyResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "Resumes retrieved successfully",
            count: resumes.length,
            resumes
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve resumes",
            error: error.message
        });
    }
};

module.exports = {
    uploadResume,
    getMyResumes
};