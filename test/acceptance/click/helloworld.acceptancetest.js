const expect = require('chai').expect;
const request = require('request');
const baseUrl = 'https://google.com';

describe('acceptance test hello world', function() {
  it('should return hello world', (done) => {
    request(baseUrl, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.have.string('I\'m Feeling Lucky');
      done();
    });
  });
});
