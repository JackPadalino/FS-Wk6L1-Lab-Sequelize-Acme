const {
    db,Person,Place,Thing,Souvenir
} = require('./db');

const seedDB=async()=>{
    await db.sync({force:true,logging:false});
    const people = [
        {name:'moe'},
        {name:'larry'},
        {name:'lucy'},
        {name:'ethyl'},
    ];
    const places = [
        {name:'paris'},
        {name:'nyc'},
        {name:'chicago'},
        {name:'london'},
    ];
    const things = [
        {name:'hat'},
        {name:'bag'},
        {name:'shirt'},
        {name:'cup'},
    ];
    let Promises = people.map((person) => Person.create(person));
    Promise.all(Promises);
    Promises = places.map((place) => Place.create(place));
    Promise.all(Promises);
    Promises = things.map((thing) => Thing.create(thing));
    Promise.all(Promises);
};

seedDB();