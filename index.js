const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require('./routers/authRouter');
const postsRouter = require('./routers/postsRouter');
const userRouter = require('./routers/userRouter');

const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const cloudinary = require('cloudinary').v2;
const cors = require('cors')

dotenv.config("./.env");

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();

// middleware
app.use(express.json({limit: '50mb'}));
app.use(morgan('common'));
app.use(cookieParser());
app.use(cors({
    credentials : true,
    origin: 'http://localhost:3000'
}));


app.use('/auth',authRouter);
app.use('/posts',postsRouter);
app.use('/user',userRouter);

app.get("/", (req,res)=> {
    res.status(200).send('Ok from server');
});

const PORT = process.env.PORT || 4001;

dbConnect();

app.listen(PORT , ()=> {
    console.log(`listening on port: ${PORT}`);
});

