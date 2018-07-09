const express = require('express');
const router = express.Router();
const Celebrity = require('/models/celebrity')


router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
      .then((celebsArray)=>{
        console.log(celebsArray);
        res.render('celebrities/index', {celebsArray:celebsArray});

      })
    .catch((err)=>{

      next(err)
    });
});








module.exports = router;