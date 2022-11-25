const mongoose = require("mongoose");
const userModel = require("./user.model");
const rideSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    route: String,
    destination: String,
    meeting_point: String,
    date: String,
    time: String,
    status: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

});

const rideModel = mongoose.model("Rides", rideSchema);
module.exports = rideModel;
