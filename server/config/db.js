import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
