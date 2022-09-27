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
    const peoplePromises = people.map((person) => Person.create(person));
    const placePromises = places.map((place) => Place.create(place));
    const thingPromises = things.map((thing) => Thing.create(thing));
    const promisesArr = [
        peoplePromises,
        placePromises,
        thingPromises
    ];
    promisesArr.forEach(arr=>Promise.all(arr));
};

seedDB();