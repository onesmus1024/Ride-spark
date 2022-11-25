const rideModel = require('../models/ride.model') 
const mongoose = require("mongoose");
getRides = async (req, res) => {
    try {
        const rides = await rideModel.find({});
        res.status(200).json(rides);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

getRideById = async (req, res) => {
    try {
        const ride = await rideModel.findById(req.params.id);
        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

createRide = async (req, res) => {
    const ride = new rideModel({
        _id: mongoose.Types.ObjectId(),
        route: req.body.route,
        destination: req.body.destination,
        meeting_point: req.body.meeting_point,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        user: req.user,

    });
    try {
        const newRide = await ride.save();
        res.status(201).json(newRide);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

updateRide = async (req, res) => {
    try {
        const ride = await rideModel.findById(req.params.id);
        if (req.body.route != null) {
            ride.route = req.body.route;
        }
        if (req.body.destination != null) {
            ride.destination = req.body.destination;
        }
        if (req.body.meeting_point != null) {
            ride.meeting_point = req.body.meeting_point;
        }
        if (req.body.date != null) {
            ride.date = req.body.date;
        }
        if (req.body.time != null) {
            ride.time = req.body.time;
        }
        if (req.body.status != null) {
            ride.status = req.body.status;
        }
        const updatedRide = await ride.save();
        res.status(200).json(updatedRide);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

deleteRide = async (req, res) => {
    try {
        const ride = await rideModel.findById(req.params.id);
        await ride.remove();
        res.status(200).json({ message: "Ride deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

ride  = {
    getRides,
    getRideById,
    createRide,
    updateRide,
    deleteRide
}

module.exports = ride