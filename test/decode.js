/**
 * Created by feiqiang on 2016/11/13.
 */
var program = require('../lib');
var assert = require('assert');

describe('Decode', function () {

    it('decode', function () {
        program.parse(['node', 'xdata-cli', 'decode', 'e4 b8 ad e5 9b bd', '-c', 'gbk']);
        // 中国
    });
});