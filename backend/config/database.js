const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.databaseURI);
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        // console.log(conn);
        
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(config.databaseURI)
        console.log(`❌ Database connection failed: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;