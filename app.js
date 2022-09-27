const express = require('express');
const app = express();
const {
    Person,Place,Thing,Souvenir
} = require('./db');

const {
    home
} = require('./views/home')

const PORT = 3000;

app.get("/", async(req,res,next)=>{
    try{
        const [people,places,things,souvenirs] = await Promise.all([
            Person.findAll(),
            Place.findAll(),
            Thing.findAll(),
            Souvenir.findAll({include:[Person,Place,Thing]})
        ]);
        res.send(home(people,places,things,souvenirs))
    }catch(error){
        next(error);
    };
});

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});