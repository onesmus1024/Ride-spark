const mocha = require('mocha');
const chai = require('chai');
const userModel = require('../models/user.model');
const mongoose = require('mongoose');
const db = require('../db/db.connection');
const expect = chai.expect;


db.on('error', (error) => console.error(error));
db.once('open', () => {
    console.log('Connected to Database');
});


describe('User Model', () => {
    it('should create a new user', (done) => {
        const user = new userModel({
            _id: new mongoose.Types.ObjectId(),
            username    : 'test',
            email       : 'test',
            password    : 'test',
            phone_number: 'test',
            profile_picture: 'test',
            isAdmin     : false,
            isActive    : false,

        });
        user.save((err, user) => {
            expect(err).to.be.null;
            expect(user).to.be.an('object');
            expect(user.username).to.equal('test');
            expect(user.email).to.equal('test');
            expect(user.password).to.equal('test');
            expect(user.phone_number).to.equal('test');
            expect(user.profile_picture).to.equal('test');
            expect(user.isAdmin).to.equal(false);
            expect(user.isActive).to.equal(false);
            done();
        });
    });

    // it('should not create a new user', (done) => {
    //     const user = new userModel({
    //         username    : 'test',
    //         email       : 'test',
    //         password    : 'test',
    //         phone_number: 'test',
    //         profile_picture: 'test',
    //         isAdmin     : false,
    //         isActive    : false,
    //     });
    //     user.save((err, user) => {
    //         expect(err).to.be.an('object');
    //         expect(user).to.be.undefined;
    //         done();
    //     });
    // });

    it('should get user', (done) => {
        userModel.find({ email: 'test'
        }, (err, user) => {
            expect(err).to.be.null;
            expect(user).to.be.an('array');
            expect(user[0].username).to.equal('test');
            expect(user[0].email).to.equal('test');
            expect(user[0].password).to.equal('test');
            expect(user[0].phone_number).to.equal('test');
            expect(user[0].profile_picture).to.equal('test');
            expect(user[0].isAdmin).to.equal(false);
            expect(user[0].isActive).to.equal(false);
            done();
        }
        );
    });


});


