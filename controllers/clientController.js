const express = require('express');
const router = express.Router();
const path = require('path');
const Client = require('../models/client');

 exports.getAllClient = async (req, res, next) => {
     try{
         const allClients= await Client.find();
         res.send(allClients);
    }    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.getclientById = async (req, res, next) => {
    try{
        const client= await Client.findById(req.params.id);
        res.send(client);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.createClient = async (req, res, next) => {
    try{
        const client= await Client.create(req.body);
        res.send(client);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.updateClient = async (req, res, next) => {
    try{
        const client= await Client.findByIdAndUpdate(req.params.id, req.body)
        res.send(client);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}

exports.deleteClient = async (req, res, next) => {
    try{
        const client= await Client.findByIdAndRemove(req.params.id);
        res.send(client);
    }
    catch (err) {
        res.status(500).json({ message: 'server error' })

    }
}