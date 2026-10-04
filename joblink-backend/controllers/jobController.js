const Job = require("../models/Job");

const createJob = async (req, res) => {
    try {
        const {
            title,
            company,
            description,
            location,
            salary,
            skills,
            jobType,
            experience
        } = req.body;

        if (
            !title ||
            !company ||
            !description ||
            !location ||
            salary === undefined
        ) {
            return res.status(400).json({
                message: "Title, company, description, location and salary are required"
            });
        }

        const job = await Job.create({
            title,
            company,
            description,
            location,
            salary,
            skills: skills || [],
            jobType: jobType || "Full-time",
            experience: experience || "Fresher",
            employer: req.user.id
        });

        res.status(201).json({
            message: "Job created successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create job",
            error: error.message
        });
    }
};

const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find()
            .populate("employer", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Jobs retrieved successfully",
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

const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)
            .populate("employer", "name email");

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job retrieved successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve job",
            error: error.message
        });
    }
};

const updateJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        if (job.employer.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can only update your own jobs"
            });
        }

        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            message: "Job updated successfully",
            job: updatedJob
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update job",
            error: error.message
        });
    }
};


const deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        if (job.employer.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can only delete your own jobs"
            });
        }

        await Job.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Job deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete job",
            error: error.message
        });
    }
};

const searchJobs = async (req, res) => {
    try {
        const { keyword, location, jobType, minSalary, maxSalary } = req.query;

        const filter = {};

        if (keyword) {
            filter.$or = [
                { title: { $regex: keyword, $options: "i" } },
                { company: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ];
        }

        if (location) {
            filter.location = { $regex: location, $options: "i" };
        }

        if (jobType) {
            filter.jobType = jobType;
        }

        if (minSalary || maxSalary) {
            filter.salary = {};

            if (minSalary) {
                filter.salary.$gte = Number(minSalary);
            }

            if (maxSalary) {
                filter.salary.$lte = Number(maxSalary);
            }
        }

        filter.status = "Open";

        const jobs = await Job.find(filter)
            .populate("employer", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Jobs search completed successfully",
            count: jobs.length,
            jobs
        });

    } catch (error) {
        res.status(500).json({
            message: "Job search failed",
            error: error.message
        });
    }
};

module.exports = {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob,
    searchJobs
};