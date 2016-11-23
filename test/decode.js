/**
 * Created by feiqiang on 2016/11/13.
 */
var program = require('../lib');
var assert = require('assert');
var iconv = require('iconv-lite');

describe('Decode', function () {

    it('decode pretty hex', function () {
        program.parse(['node', 'xdata-cli', 'decode', 'd6 d0 b9 fa', '--encoding', 'gbk']);
        // 中国
    });

    it('decode compressed hex', function () {
        program.parse(['node', 'xdata-cli', 'decode', 'd6d0b9fa', '--encoding', 'gbk']);
        // 中国
    });

    it('decode array hex', function () {
        var a = iconv.encode('中国', "base64").toString("utf-8");
        console.log(a);

        // program.parse(['node', 'xdata-cli', 'decode', '[0xd6, 0xd0, 0xb9, 0xfa]', '--encoding', 'gbk']);
        // 中国
    });
});