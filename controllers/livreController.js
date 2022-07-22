const express = require('express');
const router = express.Router();
const path = require('path');
const Livre = require('../models/livre');

exports.getAllLivre = async (req, res) => {
    try{
        const allLivres= await Livre.find();
        res.send(allLivres);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.getLivreById = async (req, res, next) => {
    try{
        const livre= await Livre.findById(req.params.id);
        res.send(livre);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.createLivre = async (req, res, next) => {
    try{
        const livre= await Livre.create(req.body);
        res.send(livre);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'server error' })

    }
}

exports.updateLivre = async (req, res, next) => {
    try{
        const livre = await Livre.findByIdAndUpdate(req.params.id, req.body)
        res.send(livre);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.deleteLivre = async (req, res, next) => {
    try{
        const Livre = await Livre.findByIdAndRemove(req.params.id);
        res.send(Livre);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}