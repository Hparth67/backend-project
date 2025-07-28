// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import express from "express";
// const app = express()
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

 
connectDB()
.then(() => {
    app.listen(process.PORT || 8000, () => {
    console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("ERROR", () => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.POR, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()
*/