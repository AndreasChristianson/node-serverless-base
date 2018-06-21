const chai = require('chai');
const expect = chai.expect;

const helloWorld = require('../../../src/controller/helloworld');

describe('unit test hello world', () => {
    it('should return hello world', () => {
        const response = helloWorld.hello();

        expect(response).to.equal('hello world!');
    });
});
