import express from 'express';  // import express
import bodyParser from 'body-parser';   // for parsing the body of the request
import cors from 'cors';    // for allowing cross-origin requests
import mongoose from 'mongoose';   // for connecting to the database

import posts from './routes/posts.js';

const app = express();

// body parser json middleware
app.use(bodyParser.json({ limit: '30mb' , extended: true}));
// cors middleware for allowing cross-origin requests
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// cors middleware
app.use(cors());

app.use('/posts', posts)

const CONNECTION_URL = 'mongodb+srv://emonfrom:emonfrom1234@cluster0.xgadn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);