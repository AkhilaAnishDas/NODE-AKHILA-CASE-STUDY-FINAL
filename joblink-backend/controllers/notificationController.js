const Notification = require("../models/Notification");

// ==================== CREATE NOTIFICATION ====================

const createNotification = async (req, res) => {
    try {
        const { userId, message, type } = req.body;

        if (!userId || !message) {
            return res.status(400).json({
                message: "User ID and message are required"
            });
        }

        const notification = await Notification.create({
            user: userId,
            message,
            type: type || "General"
        });

        res.status(201).json({
            message: "Notification created successfully",
            notification
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create notification",
            error: error.message
        });
    }
};

// ==================== GET MY NOTIFICATIONS ====================

const getMyNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "Notifications retrieved successfully",
            count: notifications.length,
            notifications
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve notifications",
            error: error.message
        });
    }
};

// ==================== MARK AS READ ====================

const markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!notification) {
            return res.status(404).json({
                message: "Notification not found"
            });
        }

        notification.isRead = true;

        await notification.save();

        res.status(200).json({
            message: "Notification marked as read",
            notification
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update notification",
            error: error.message
        });
    }
};

module.exports = {
    createNotification,
    getMyNotifications,
    markAsRead
};