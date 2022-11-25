const mocha = require('mocha');
const chai = require('chai');
const upload = require('../middlewares/fileupload.middleware');

const expect = chai.expect;

// describe('File Upload', () => {
//     it('should upload a file', (done) => {
//         const file = new upload({
//             filename: 'test',
//             mimetype: 'test',
//             size: 'test',
//             path: 'test',
//         });
//         file.save((err, file) => {
//             expect(err).to.be.null;
//             expect(file).to.be.an('object');
//             expect(file.filename).to.equal('test');
//             expect(file.mimetype).to.equal('test');
//             expect(file.size).to.equal('test');
//             expect(file.path).to.equal('test');
//             done();
//         });
//     });

    
// });
