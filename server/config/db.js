const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/PortfolioTracker";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
