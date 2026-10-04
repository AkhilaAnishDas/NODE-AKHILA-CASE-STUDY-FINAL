const express = require("express");

const {
    uploadResume,
    getMyResumes
} = require("../controllers/resumeController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/resumes/upload:
 *   post:
 *     summary: Upload a resume
 *     tags: [Resumes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - resume
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Resume uploaded successfully
 *       400:
 *         description: Invalid file
 *       401:
 *         description: Unauthorized
 */
router.post(
    "/upload",
    protect,
    upload.single("resume"),
    uploadResume
);

/**
 * @swagger
 * /api/resumes:
 *   get:
 *     summary: Get my uploaded resumes
 *     tags: [Resumes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Resumes retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get(
    "/",
    protect,
    getMyResumes
);

module.exports = router;