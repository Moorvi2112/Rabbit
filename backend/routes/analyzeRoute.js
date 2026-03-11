const express = require("express");
const multer = require("multer");
const analyzeController = require("../controllers/analyzeController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/**
 * @swagger
 * /api/analyze:
 *   post:
 *     summary: Upload sales data and generate AI summary
 *     description: Upload a CSV or XLSX sales dataset and receive an AI-generated executive summary via email.
 *     tags:
 *       - Sales Analysis
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *               - email
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: CSV or XLSX sales data file
 *               email:
 *                 type: string
 *                 description: Email address where summary will be sent
 *                 example: manager@company.com
 *     responses:
 *       200:
 *         description: AI summary generated and email successfully sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Summary sent successfully
 *       400:
 *         description: Invalid file or missing data
 *       500:
 *         description: Internal server error
 */

router.post("/analyze", upload.single("file"), analyzeController);

module.exports = router;