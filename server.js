const express = require('express');
const app = express();
const {
    Person,Place,Thing,Souvenir
} = require('./db');

const PORT = 3000;

app.get("/", async(req,res)=>{
    const people = await Person.findAll();
    const places = await Place.findAll();
    const things = await Thing.findAll();
    res.send(`
    <h1>Acme People, Places, and Things</h1>
    <h2>People</h2>
    <ul>
        ${people.map(person=>
            `<li>${person.name}</li>`).join('')}
    </ul>
    <h2>Places</h2>
    <ul>
        ${places.map(place=>
            `<li>${place.name}</li>`).join('')}
    </ul>
    <h2>Things</h2>
    <ul>
        ${things.map(thing=>
            `<li>${thing.name}</li>`).join('')}
    </ul>
    `)
});

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
});