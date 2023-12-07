import express from 'express'
import Route from './routes/route.js';
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', Route);

const PORT = 8000;

Connection();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})