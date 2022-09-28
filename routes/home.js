const express = require('express');
const router = express.Router();
const {
    Person,Place,Thing,Souvenir
} = require('../db');
const {
    home
} = require('../views/home')

router.get("/", async(req,res,next)=>{
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

router.post('/',async(req,res,next)=>{
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

// delete a souvenir
router.delete('/:id',async(req,res,next)=>{
    try{
        const souvenirId = req.params.id;
        const souvenir = await Souvenir.findByPk(+souvenirId);
        await souvenir.destroy();
        res.redirect('/');
    }catch(error){
        next(error)
    };
});

module.exports = router;