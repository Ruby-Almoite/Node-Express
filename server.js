const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))



app.get('/', (req, res)=> {
   res.send("index")
   //res.render
});

const obj ={newVariable: "Hello"}

app.get('/home',(req, res)=> {
   //res.render ('home', {newVariable:"Hello"})
   res.render('home')
});

let x = ()=>{}
app.get('/contact-us',(req, res)=> {
   res.render ('contact-us')
});


app.get('/about-us',(req, res)=> {
   res.render('about-us')
});

app.get('/registration',(req,res)=> {
   res.render ('registration')
})

app.get('/log-in',(req, res) => {
   res.render ('log-in')
})

const userRouter = require('./routes/users')
app.use('/users',userRouter)



/*app.get ('/', (req,res) => {
   console.log("hello world")
   //res.send ("Hello World")
   //res.send(301).send("Hello World");
   //res.download('server.js');
})

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.send("Welcome")
    //res.render()
});

const obj = { newVaraiable : "Hello World" }

app.get('/home', (req, res)=>{
   res.render('home', obj)
});

app.get('/contact-us', (req, res)=>{
   res.render('contact-us')
});

app.get('/about-us', (req, res)=>{
   res.render('about-us')
});

const userRouter = require('./routes/users')
app.use('/users', userRouter)

*/

app.listen(3000);
console.log("running in port 3000");

