const express = require('express');
const app = express();
const {
    Person,Place,Thing,Souvenir
} = require('./db');

const {
    getSouvenirString
} = require('../extras/souvenir');

const PORT = 3000;

app.get("/", async(req,res)=>{
    const [people,places,things,souvenirs] = await Promise.all([
        Person.findAll(),
        Place.findAll(),
        Thing.findAll(),
        Souvenir.findAll({include:[Person,Place,Thing]})
    ]);

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
    <h2>Souvenir purchases</h2>
    <ul>
        ${souvenirs.map(souvenir=>
            `<li>${souvenir.person.name} purchased a ${souvenir.thing.name} from ${souvenir.place.name}</li>`).join('')}
    </ul>
    `)
});

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});