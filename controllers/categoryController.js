const express = require('express');
const router = express.Router();
const path = require('path');
const Category = require('../models/category');
const Livre=require('../models/livre');

exports.getAllCategories = async (req, res, next) => {
    try{
        const allCategories= await Category.find();
        res.send(allCategories);
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
        console.log(category);
        res.send(category);
    }
    catch (err) {
       console.log(err)
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
        res.status(500).json({ message: 'server error' })

    }

    exports.getAllLivres=async(req,res,next)=>{
        try{const livres = await Livre.find();
            let response=[]
            livres.forEach(livre=>{
                response.push( { label: livre.titre, value: livre._id })
            })   
            res.json(response);

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'server error' })
    
        }
    
    }
}