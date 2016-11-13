var program = require('../lib');
var assert = require('assert');

describe('String Encoding', function () {

    it('string to hex', function () {
        program.parse(['node', 'xdata-cli', 'encode', '中国', '-c', 'gbk']);
    });
});
