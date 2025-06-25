const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get("/", (req, res)=>{
       res.send('basic')

})


app.get("/new", (req, res)=>{
    res.render('index', {messages})



})

app.post("/new", (req, res)=>{

 messages.push({ text: req.body.textejs, user: req.body.nameejs, added: new Date() });
 res.redirect('/new')
})


app.listen(3000)