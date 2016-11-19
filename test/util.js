/**
 * Created by feiqiang on 2016/11/13.
 */

var assert = require('assert');
var util = require('../lib/format');

describe('Util', function () {

    it('.format', function(){
        var actual = util.format('01121314');
        var exptected = '01 12 13 14';
        assert.equal(actual, exptected);
    })
});
