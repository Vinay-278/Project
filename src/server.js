import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./db/mongodb.js";

dotenv.config()

connectDB();