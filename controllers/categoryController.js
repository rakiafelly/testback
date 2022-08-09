const express = require('express');
const router = express.Router();
const path = require('path');
const Category = require('../models/category');
const Livre = require('../models/livre');

exports.getAllCategories = async (req, res) => {
    try{
        const allCategorys= await Category.find();
        res.send(allCategorys);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.getCategoryById = async (req, res, next) => {
    try{
        const category= await Category.findById(req.params.id);
        res.send(category);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.createCategory = async (req, res, next) => {
    try{
        const category= await Category.create(req.body);
        res.send(category);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'server error' })

    }
}

exports.updateCategory = async (req, res, next) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(category);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.deleteCategory = async (req, res, next) => {
    try{
        const category = await Category.findByIdAndRemove(req.params.id);
        res.send(category);
    }
    catch (err) {
    console.log(err);
        res.status(500).json({ message: 'server error' })

    }
}

    // exports.getLivres = async (req, res) => {
    //     try {
        
    //         const category=await Category.findOneAndUpdate({_id:req.params.id},{$push:{livres:req.params.livreId}},{new:true})

    //         res.json(category);
    //     }
    //     catch (err) {
    //         res.status(500).json({ message: 'server error' })
    //     }
    // }


