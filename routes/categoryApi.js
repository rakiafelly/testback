
const express = require('express');
const {createCategory, updateCategory, deleteCategory,getAllCategories,getCategoryById,getLivres } = require('../controllers/categoryController');


const router = express.Router();

router.get('/category'
,getAllCategories);

router.get('/category/:id'
,getCategoryById)
//add
router.post('/category',createCategory);

//update
router.put('/category/:id'
,updateCategory)

//delete
router.delete('/category/:id'
,deleteCategory);
// router.get('/alllivres',getLivres);

module.exports = router;