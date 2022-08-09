const express = require('express');
const passport=require('passport');
const {getLivreById,createLivre,deleteLivre,updateLivre,getAllLivres} = require('../controllers/livreController');

const router = express.Router();

router.get('/livre'
,getAllLivres);

router.get('/livre/:id'
,getLivreById)
//add
router.post('/livre',createLivre);

//update
router.put('/livre/:id'
,updateLivre)

//delete
router.delete('/livre/:id'
,deleteLivre);
module.exports = router;