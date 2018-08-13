var mongoose=require("mongoose")
var url="mongodb://localhost:27017/angularclass"		//IP for an online server; Mentioning port is not necessary
mongoose.connect(url)
db=mongoose.connection

module.exports=db
console.log('Connection Done')