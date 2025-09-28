const express = require('express');

//express app
const app = express();

//register view engine
app.set("view engine" , "ejs");

//listen for express
app.listen(3000)

app.get('/' ,(req,res)=>{
    //res.sendFile('./views/index.html' ,{root:__dirname})
    const blogs= [
        {title: 'Tricia eats alot' , snippet: "She likes eggs and lots of pizza"},
        {title: 'Tricia eats alot' , snippet: "She likes eggs and lots of pizza"},
        {title: 'Tricia eats alot' , snippet: "She likes eggs and lots of pizza"},
        {title: 'Tricia eats alot' , snippet: "She likes eggs and lots of pizza"},
    ]
    res.render('index1',{title: 'Home', blogs});
} )
app.get('/about' ,(req,res)=>{
    res.render("about" , {title: 'About'})
} )

app.get('/blogs/create' ,(req,res)=>{
    res.render('create', {title: 'Blog'})
})

//redirects 
app.get('/about-us' , (req,res)=>{
    res.redirect('/about')
})

//404 page

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'})
})