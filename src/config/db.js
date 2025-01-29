import mongoose from 'mongoose';

const connectDB = async (url) => {
    try{
        const conn = await mongoose.connect(url, {
        });
        console.log(`Connected MongoDB database: ${conn.connection.host}`);
        return conn;
    }catch (error){
        console.error("Error when trying to connect to MongoDB database", error);
        process.exit(1);
    }
}

export default connectDB;