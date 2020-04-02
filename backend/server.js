var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');
var app=express();
var mongoose=require('mongoose');
var port=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false,
       
    })
)

const mongoURL='mongodb://localhost/social';

mongoose
       .connect(mongoURL,{useNewUrlParser:true})
       .then(()=>console.log("MongoDB connected"))
       .catch(err=>console.log(err))

var Users=require('./routes/Users');

app.use('/users',Users)

app.listen(port,()=>{
    console.log("Server in running on port:"+ port);
})       