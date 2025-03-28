const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();


router.get("/greet", (req, res) => {
    if (req.session.userId) {
        res.json({
            name: req.session.userName,
            role: req.session.userRole
        });
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
});

module.exports = router;