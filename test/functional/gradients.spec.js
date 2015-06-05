/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var gradients = require('../../src/scripts/gradients');

/* Start Test */
describe('gradients module can ', function () {

    it('print the sum to the dom', function () {
        new gradients().write([1,2,3]);

        expect(document.getElementById('demo-functional').innerHTML).toBe('6');

    });

});