import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(db => console.log("la base de datos se conecto con exito"))
.catch(error => console.log("Sorry"))