const express = require("express");

const {
    applyForJob,
    getMyApplications,
    updateApplicationStatus
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/applications:
 *   post:
 *     summary: Apply for a job
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - jobId
 *               - resumeId
 *             properties:
 *               jobId:
 *                 type: string
 *                 description: ID of the job
 *               resumeId:
 *                 type: string
 *                 description: ID of the resume
 *               coverLetter:
 *                 type: string
 *                 description: Optional cover letter
 *     responses:
 *       201:
 *         description: Application submitted successfully
 *       400:
 *         description: Invalid application data
 *       401:
 *         description: Unauthorized
 */
router.post("/", protect, applyForJob);

/**
 * @swagger
 * /api/applications/my:
 *   get:
 *     summary: Get my job applications
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Applications retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/my", protect, getMyApplications);

/**
 * @swagger
 * /api/applications/{id}/status:
 *   put:
 *     summary: Update application status
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Application ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [Applied, Shortlisted, Rejected, Hired]
 *     responses:
 *       200:
 *         description: Application status updated successfully
 *       400:
 *         description: Invalid status
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Application not found
 */
router.put("/:id/status", protect, updateApplicationStatus);

module.exports = router;