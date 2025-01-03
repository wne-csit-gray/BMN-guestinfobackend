const chai = require('chai');
const should = require('chai').should();

chai.use(require("chai-http"));

// a set of valid guest data
const validGuestData = {
    "BNMID": "AW0123456",
    "Resident": "resident",
    "Grad_Year": 2024,
    "Grad": "UG",
    "Date": "04-15-2023",
    "Year_Issued": 2022
};
// The actual guest to test using valid or invalid property values.
// Important: copy by values using spread operator. If you copy by ref to validGuestData and then mutate guestData,
// JS will not respect the const-ness of validGuestData
let guestData = {...validGuestData};

describe('Create Guest Endpoint', () => {

    //prevents error from duplicate, allows run without rebuild
    it('removes the guest', (done) => {
        const guestID = guestData.bnmID;
        chai.request('http://localhost:10350')
        .delete(`/guests/AW0123456`)
        .end((err, res) => {
            done();
        });
    });

    it('creates a new guest when valid data is provided', (done) => {
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null
            if (err) {
                return done(err);
            }

            console.log(res.body)

            res.should.have.status(201);
            res.should.have.header('Location', '/guests/AW0123456');
            res.body.should.be.an('object');
            res.body.should.have.property('BNMID').equal('AW0123456');
            res.body.should.have.property('Resident').equal('resident');
            res.body.should.have.property('Grad_Year').equal(2024);
            res.body.should.have.property('Grad').equal("UG");
            res.body.should.have.property('Date').equal("04-15-2023");
            res.body.should.have.property('Year_Issued').equal(2022);
            done();
        });
    });

    it('returns a 409 error if the guest already exists', (done) => {
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }

            res.should.have.status(409);
            res.body.should.be.an('object');
            res.body.should.have.property('status').equal(409);
            res.body.should.have.property('error').equal('Conflict');
            res.body.should.have.property('message').equal('Guest already exists');
            done();
        });
    });

    // Remove the guest so you can repeatedly call `npm run test` without running `bin/rebuild.sh` to remove the conflicting guest.
    // Delete this one it() when migrating unit tests into CI pipeline.

    it('returns 400 error response if guest data is invalid', (done) => {
        guestData = {
            "BNMID": "AW-789012",
            "Resident": "resident",
            "Grad_Year": 2024,
            "Grad": "UG",
            "Date": "04-15-2023",
            "Year_Issued": 2022
        }; // does not conform to bnmID pattern
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }
          
            res.should.have.status(400);
            //res.should.have.own.property('body').with.own.property('errors');
            res.body.errors.should.have.members;
            res.body.errors[0].should.have.own.property('errorCode').equal('pattern.openapi.validation');
            
        }
        );

        guestData = {...validGuestData};
        guestData.resident = 5; // invalid property type
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }

            //res.should.have.status(400);
            //res.body.errors[0].should.have.own.property('errorCode').equal('type.openapi.validation');
            
        });

        done();
    });
});
