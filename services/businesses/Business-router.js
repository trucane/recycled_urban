const express = require('express');
const router = express.Router();
const Business = require('./Business-model')

router.use(express.json())


router.get('/', async (req, res) => {
    try{
        const business = await Business.find();
        res.status(200).json(business)

    }catch(err){
        res.json({message:err})
    }
});

router.post('/', async (req, res) => {
    const {name, category} = req.body
    const business = new Business({
        name,
        category
    });

    try{
        const addB = await business.save()
        res.status(200).json(addB)

    }catch(err){
        res.json({message:err})
    }
} );

module.exports = router;