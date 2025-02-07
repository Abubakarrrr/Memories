
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes)

// const CONNECTION_URL = 'mongodb+srv://respekt:QeQ8XgJjDcpNFoH9@cluster0.hbbrkur.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

