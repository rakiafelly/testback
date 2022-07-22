const express = require('express');
const passport=require('passport');
const { getAllClient, getclientById, createClient, updateClient, deleteClient } = require('../controllers/clientController');
const router = express.Router();


router.get('/client',passport.authenticate('bearer', { session: false })
,getAllClient);

router.get('/client/:id'
,getclientById)
//add
router.post('/client',createClient);

//update
router.put('/client/:id',passport.authenticate('bearer', { session: false })
,updateClient)

//delete
router.delete('/client/:id',passport.authenticate('bearer', { session: false })
,deleteClient);
module.exports = router;