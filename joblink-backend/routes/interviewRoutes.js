const express = require("express");

const {
    scheduleInterview,
    getMyInterviews,
    updateInterviewStatus
} = require("../controllers/interviewController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/interviews:
 *   post:
 *     summary: Schedule an interview
 *     tags: [Interviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - candidate
 *               - employer
 *               - job
 *               - date
 *               - meetingLink
 *             properties:
 *               candidate:
 *                 type: string
 *               employer:
 *                 type: string
 *               job:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               meetingLink:
 *                 type: string
 *     responses:
 *       201:
 *         description: Interview scheduled successfully
 *       400:
 *         description: Invalid interview data
 *       401:
 *         description: Unauthorized
 */
router.post("/", protect, scheduleInterview);

/**
 * @swagger
 * /api/interviews/my:
 *   get:
 *     summary: Get my interviews
 *     tags: [Interviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Interviews retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/my", protect, getMyInterviews);

/**
 * @swagger
 * /api/interviews/{id}/status:
 *   put:
 *     summary: Update interview status
 *     tags: [Interviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Interview ID
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
 *                 enum: [Scheduled, Completed, Cancelled]
 *     responses:
 *       200:
 *         description: Interview status updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Interview not found
 */
router.put("/:id/status", protect, updateInterviewStatus);

module.exports = router;