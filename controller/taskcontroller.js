const { status } = require('init');
const todo = require('../model/TODO')
module.exports.addtask = async (req, res) => {
    try {
        // console.log(req.body);
        req.body.isActive = true;
        req.body.create_date = new Date().toLocaleString();
        req.body.update_date = new Date().toLocaleString();
        let tododata = await todo.create(req.body)
        if(tododata){
            return res.status(200).json({ mes: 'data add', status: 1 ,ts:tododata});
        }
        else{
            return res.status(200).json({ mes: 'data not add', status: 0});

        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mes: 'server error', status: 0 });
    }
}
module.exports.viewtask = async(req,res)=>{
    try {
        let viewtodo  = await todo.find({});
        if (viewtodo) {
            return res.status(200).json({mes:'view task..',status:1,vt:viewtodo})
        }
        else {
            return res.status(200).json({mes:"task is not defind..",status:0})
        }
    } catch (error) {
        return res.status(400).json({mes:"server error",status:0,err:error})
    }
}
module.exports.deletetask = async(req,res)=>{
    try {
        let deletetodo  = await todo.findByIdAndDelete(req.params.id);
        if (deletetodo) {
            return res.status(200).json({mes:'delete task..',status:1,dt:deletetodo})
        }
        else {
            return res.status(200).json({mes:"task is not defind..",status:0})
        }
    } catch (error) {
        return res.status(400).json({mes:"server error",status:0,err:error})
    }
}
module.exports.updatetask = async(req,res)=>{
    try {
        let updatetodo  = await todo.findByIdAndUpdate(req.params.id,req.body);
        if (updatetodo) {
            return res.status(200).json({mes:'update task..',status:1,ut:updatetodo})
        }
        else {
            return res.status(200).json({mes:"task is not defind..",status:0})
        }
    } catch (error) {
        return res.status(400).json({mes:"server error",status:0,err:error})
    }
}