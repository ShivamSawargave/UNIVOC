import express from "express";
import dotenv from "dotenv"; 
import cors from "cors";
import mongoose from "mongoose";

import userRoute from './route/user.route.js';

const app= express();

app.use(cors({origin:true}));
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT || 1000;
const URI = process.env.MongoDBURI;


// connect to mongoDB server
try {
    mongoose.connect(URI);
    console.log("connected mongodb");
} catch (error) {
    console.log("error:",error);
}



app.use("/user",userRoute);
app.use("/contactus",userRoute);
app.use("/skills",userRoute);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});
