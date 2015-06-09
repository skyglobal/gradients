/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var gradients = require('../../src/scripts/gradients');

/* Start Test */
describe('gradients module can ', function () {

    it('sum an array of numbers', function () {

        expect(new gradients().sum([1,2,3])).toBe(6);

    });

    it('version is attached', function () {

        expect(new gradients().version).toBe('0.1.1');

    });

});
