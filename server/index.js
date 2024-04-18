const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDb = require("./db/db");
const VisualDashboard = require('./models/visual_dashboard');
connectDb();

app.get("/api/v1/data", async (req, res) => {
    try {
        const data = await VisualDashboard.find();
        return res.status(200).json({
            success: true,
            data
        })
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})