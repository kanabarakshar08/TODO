const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required:true
    },
    task_type: {
        type:String,
        required:true 
    },
    isActive : {
        type : Boolean
    },
    create_date : {
        type : String
    },
    update_date : {
        type : String
    },
});
const TASK = mongoose.model("TASK",todoSchema);
module.exports = TASK;