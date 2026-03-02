import mongoose from "mongoose";
import express from "express";


const app = express();

// iife => immediately invoked fuction expression (fuction(){})()
// fuction() replaces with arrow function () =>
// used beacuse for applying the async await because database in another continent

// (async()=>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URL);
//         app.on("error",(error)=>{
//             console.log(error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listen on port${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("Error", error)
//         throw error
//     }
// })()

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongodb is connected successfully ${ connect.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection error", error);
    process.exit(1);
  }
};

export default connectDB
