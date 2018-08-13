var express=require('express')
var body=require('body-parser')
var url=require('url')
var path=require('path')
var http=require('http')

var app=express()

var usercontroller=require('./server/controller/usercontroller')

app.use(body.json())
app.use(body.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'dist/angularapp')))

app.use(usercontroller)
app.use('/webapi',usercontroller)
app.set('port',3000)
const port=3000

server=http.createServer(app)

server.listen(port,function(){
    console.log('Server started at http://localhost:3000')
})