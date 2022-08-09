const express = require('express');
const passport=require('passport');
const { getAllClient, getClientById, createClient, updateClient, deleteClient } = require('../controllers/clientController');
const router = express.Router();


router.get('/client'
,getAllClient);

router.get('/client/:id'
,getClientById)
//add
router.post('/client',createClient);

//update
router.put('/client/:id'
,updateClient)

//delete
router.delete('/client/:id'
,deleteClient);
module.exports = router;