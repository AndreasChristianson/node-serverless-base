const chai = require('chai');
const expect = chai.expect;

const helloWorld = require('../../../src/controller/helloworld');

describe('unit test hello world', () => {
    let actualError, actualResponse;

    beforeEach((done) => {
        helloWorld.hello({}, {}, (error, response) => {
            actualError = error;
            actualResponse = response;
            done();
        });
    });

    it('should not raise an error', () => {
        expect(actualError).to.equal(null);
    });

    it('should yield the expected response', () => {
        expect(actualResponse.statusCode).to.equal(200);
        expect(actualResponse.body).to.equal('hello world!');
    });
});
