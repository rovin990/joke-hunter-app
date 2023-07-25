import express from "express";
import axios from "axios"; // for using http client
import bodyParser from "body-parser"; // for adding body to http request

const app = express();
const port =3000;

app.use(bodyParser.urlencoded({extended:true})) // adding middleware which will add boy to request

app.use(express.static("public")) // adding middleware which will help to load static files for express application from public folder

app.get("/",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})

app.get("/Programming",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Programming?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})

app.get("/Dark",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Dark?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})
app.get("/Pun",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Pun?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})
app.get("/Spooky",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Spooky?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})
app.get("/Christmas",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Christmas?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})

app.get("/Any",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})

app.get("/Misc",async(req,res)=>{
    
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Misc?amount=5");
        const data = result.data.jokes;
        console.log(data)
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        
    }
    
})

app.listen(port,()=>{
    console.log(`Server is running on ${port} port`)
})