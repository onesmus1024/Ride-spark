const mocha = require('mocha');
const chai = require('chai');
const rideModel = require('../models/ride.model');
const db = require('../db/db.connection');
const mongoose = require('mongoose');


const expect = chai.expect;
db.on('error', (error) => console.error(error));
db.once('open', () => {
    console.log('Connected to Database');
});

describe('Ride Model', () => {
    it('should create a new ride', (done) => {
        const ride = new rideModel({
            _id: new mongoose.Types.ObjectId(),
            route: 'test',
            destination: 'test',
            meeting_point: 'test',
            date: 'test',
            time: 'test',
            status: 'test',
           

        });
        ride.save((err, ride) => {
            expect(err).to.be.null;
            expect(ride).to.be.an('object');
            expect(ride.route).to.equal('test');
            expect(ride.destination).to.equal('test');
            expect(ride.meeting_point).to.equal('test');
            expect(ride.date).to.equal('test');
            expect(ride.time).to.equal('test');
            expect(ride.status).to.equal('test');
            done();
        });
    });

    it('get ride', (done) => {
        rideModel.find({ route: 'test' }, (err, ride) => {
            expect(err).to.be.null;
            expect(ride).to.be.an('array');
            expect(ride[0].route).to.equal('test');
            expect(ride[0].destination).to.equal('test');
            expect(ride[0].meeting_point).to.equal('test');
            expect(ride[0].date).to.equal('test');
            expect(ride[0].time).to.equal('test');
            expect(ride[0].status).to.equal('test');
            done();
        });

    });
});
