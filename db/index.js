import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();
const URI = process.env.MONGO_URI;
export async function connectDb() {
  try {
    connect(URI, {
      dbName: "qbhelp",
    });
  } catch (err) {
    console.log(err);
  }
}
