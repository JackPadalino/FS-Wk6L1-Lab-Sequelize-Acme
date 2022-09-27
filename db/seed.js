const {
    db,Person,Place,Thing,Souvenir
} = require('.');

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

    const [moe, larry,lucy,ethyl] = await Promise.all(peoplePromises);
    const [paris,nyc,chicago,london] = await Promise.all(placePromises);
    const [hat,bag,shirt,cup] = await Promise.all(thingPromises);

    // moe purchased a hat in london
    // ethyl purchase a shirt in nyc
    // lucy purchased a bag in chicago
    const souvenirs =[
        {personId:moe.id,thingId:hat.id,placeId:london.id},
        {personId:ethyl.id,thingId:shirt.id,placeId:nyc.id},
        {personId:lucy.id,thingId:bag.id,placeId:chicago.id}
    ];

    const souvenirPromises = souvenirs.map(souvenir=>Souvenir.create(souvenir));
    await Promise.all(souvenirPromises);
};

seedDB();