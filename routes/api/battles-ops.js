const router = require('express').Router();
const mongoose = require('mongoose');
const Battles = mongoose.model('Battles');
const auth = require('../auth');


router.get('/list', auth.optional, (req, res, next) => {
    Battles.find().distinct('location', (err, result) => {
        if(err){
            return next(err);
        }

        res.json(result);
    });
});

router.get('/count', auth.optional, (req, res, next) => {
    Battles.count('battle_number', (err, count) => {
        if(err){
            return next(err);
        }

        res.json({'battle_count': count});
    })
});

router.get('/stats', auth.optional, (req, res, next) => {
    res.send('requirement is not clear')
});

router.get('/search', auth.optional, (req, res, next) => {
    let king = req.query.king;
    let location = req.query.location;
    let type = req.query.type;

    Battles.find({$or: [{'attacker_king': king}, {'defender_king': king},
                             {'location': location}, {'battle_type': type}]}, 
                (err, result) => {
                    if(err){
                        return next(err);
                    }

                    res.json(result);
                });
});

module.exports = router;