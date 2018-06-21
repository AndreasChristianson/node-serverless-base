const expect = require('chai').expect;
const syncRestClient = require('sync-rest-client');
const baseUrl = 'https://clicker-game.tonybrobston.com/';

describe('acceptance test hello world', function () {
    it('should return hello world', () => {
        const response = syncRestClient.get(baseUrl + 'helloworld');

        expect(response).to.equal('hello world!');
    });
});
