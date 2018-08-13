var express=require('express')
var usersmodel=require('../models/usersmodel')

var router=express.Router()

router.get('/',function(req,res){
    res.send('Trial of express with angular(MEANstack app)')
})

router.post('/insertdata',function(req,res){
    //console.log(req.body)
    usersmodel.insertdata(req.body,function(result){
        res.json(result)
    })
})

module.exports=router