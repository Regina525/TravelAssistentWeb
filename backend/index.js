import cookieParser from "cookie-parser";
import cors from "cors";

import express from 'express';
import user from "./routes/auth.js";
import destination from "./routes/weather.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use('/api/users',user);
app.use('/api',destination)
const server = app.listen(3003,()=>{
    console.log("On")
})
server.timeout = 10000