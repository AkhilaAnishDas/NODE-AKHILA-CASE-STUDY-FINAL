const Application = require("../models/Application");
const Job = require("../models/Job");
const Resume = require("../models/Resume");

const applyForJob = async (req, res) => {
    try {
        const { jobId, resumeId, coverLetter } = req.body;

        if (!jobId || !resumeId) {
            return res.status(400).json({
                message: "Job ID and Resume ID are required"
            });
        }

        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        if (job.status !== "Open") {
            return res.status(400).json({
                message: "This job is closed"
            });
        }

        const resume = await Resume.findOne({
            _id: resumeId,
            user: req.user.id
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            });
        }

        const existingApplication = await Application.findOne({
            job: jobId,
            applicant: req.user.id
        });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job"
            });
        }

        const application = await Application.create({
            job: jobId,
            applicant: req.user.id,
            resume: resumeId,
            coverLetter: coverLetter || ""
        });

        res.status(201).json({
            message: "Job application submitted successfully",
            application
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to submit application",
            error: error.message
        });
    }
};

const getMyApplications = async (req, res) => {
    try {
        const applications = await Application.find({
            applicant: req.user.id
        })
            .populate("job")
            .populate("resume")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Applications retrieved successfully",
            count: applications.length,
            applications
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve applications",
            error: error.message
        });
    }
};

const updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const allowedStatuses = [
            "Applied",
            "Shortlisted",
            "Rejected",
            "Hired"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid application status"
            });
        }

        const application = await Application.findById(
            req.params.id
        ).populate("job");

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        if (application.job.employer.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can only update applications for your own jobs"
            });
        }

        application.status = status;

        await application.save();

        res.status(200).json({
            message: "Application status updated successfully",
            application
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update application status",
            error: error.message
        });
    }
};

module.exports = {
    applyForJob,
    getMyApplications,
    updateApplicationStatus
};