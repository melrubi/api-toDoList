import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    taskName:{
        type:String
    }
},
{
    timestamps: true,
    versionKey:false
})

export default model("task", taskSchema)