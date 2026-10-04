const express = require("express");

const {
    getMyJobs,
    getReceivedApplications
} = require("../controllers/employerController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/employer/jobs:
 *   get:
 *     summary: Get jobs posted by the logged-in employer
 *     tags: [Employer]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Employer jobs retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/jobs", protect, getMyJobs);

/**
 * @swagger
 * /api/employer/applications:
 *   get:
 *     summary: Get applications received by the employer
 *     tags: [Employer]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Received applications retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get(
    "/applications",
    protect,
    getReceivedApplications
);

module.exports = router;