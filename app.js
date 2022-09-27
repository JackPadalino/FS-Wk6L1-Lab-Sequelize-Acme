const express = require('express');
const app = express();
const {
    Person,Place,Thing,Souvenir
} = require('./db');

const {
    home
} = require('./views/home')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
//app.use(methodOverride('_method'));

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

app.post('/',async(req,res,next)=>{
    try{
        const personId = req.body.personId;
        const thingId = req.body.thingId;
        const placeId = req.body.placeId;
        await Souvenir.create({
            personId:personId,
            thingId:thingId,
            placeId:placeId
        });
        res.redirect('/')
    }catch(error){
        next(error);
    };
});

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});