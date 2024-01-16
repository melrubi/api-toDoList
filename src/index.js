import app from './App.js'
import dotenv from 'dotenv'
import './database.js'

dotenv.config();

app.listen(process.env.PORT, () =>{
    console.log("Ya estoy escuchando", process.env.PORT);
});