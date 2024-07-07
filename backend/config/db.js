import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = 'mongodb+srv://Amiyansu_Patra:Amiya%40123@cluster0.g3i8jb9.mongodb.net/FOODAPPfirebase?retryWrites=true&w=majority&appName=Cluster0';
  
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));
};
