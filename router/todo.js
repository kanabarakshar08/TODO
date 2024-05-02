const express = require('express');
const router = express.Router();
const controoler = require('../controller/taskcontroller');
router.post('/addtask',controoler.addtask)
router.get('/viewtask',controoler.viewtask)
router.delete('/deletetask/:id',controoler.deletetask)
router.put('/updatetask/:id',controoler.updatetask)
module.exports = router