import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL);

    console.log(
      `Database connected  Host- ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log("Database error : " + error);
  }
};

export default dbConnection;
