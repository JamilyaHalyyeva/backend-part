import express from "express";
import {greeting, time,randomNumber,postData,usersData,commentsData}from "./models/index.js";

const app = express();//

const port = 3000;

app.get('/', (req, res) => {
  res.send(greeting);
});

app.get('/time',(req,res)=>{
       res.send(time());

});

app.get("/test", (request,response)=>{
    response.send("this is a test response");
});

app.get("/random", (req,res)=>{   
    res.send(randomNumber());
})

app.get("/posts",(req,res)=>{
    res.json(postData);
})

app.get("/comments", (req,res)=>{
  res.json(commentsData);
})

app.get("/users", (req, res)=>{
  res.json(usersData);
})
app.get("/blogs", (req, res )=>{
    // res.send(["blog1","blog2", "blog3"]);
    res.json(["blog1","blog2", "blog3"]);

})




app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



// app.get('/time',(req,res)=>{
//     const dateNow =new Date();
//     const time =dateNow.toISOString();
//      res.send(time);

// });