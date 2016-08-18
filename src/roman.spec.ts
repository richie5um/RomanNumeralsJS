'use strict';

var expect = require('chai').expect;

import {Roman} from './roman';

describe('1999', function () {
    it('toRoman', function () {
        var result = Roman.toRoman(1999);
        expect(result).to.equal("MCMXCIX");
    });

    it('toNumber', function () {
        var result = Roman.toNumber("MCMXCIX");
        expect(result).to.equal(1999);
    });

});
