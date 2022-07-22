const express = require('express');
const passport=require('passport');
const {getAllLivre,getLivreById,createLivre,deleteLivre,updateLivre} = require('../controllers/livreController');

const router = express.Router();

router.get('/livre'
,getAllLivre);

router.get('/livre/:id'
,getLivreById)
//add
router.post('/livre',createLivre);

//update
router.put('/livre/:id'
,updateLivre)

//delete
router.delete('/livre/:id',passport.authenticate('bearer', { session: false })
,deleteLivre);
module.exports = router;