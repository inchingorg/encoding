var program = require('../lib/decode');
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
        var buf =iconv.encode('中国', 'gbk');
        var result = iconv.decode(buf, 'base64');
        console.log(result);

        var result = iconv.decode(iconv.encode("1tC5+g==", "base64"), 'gbk');
        console.log(result);

        // program.parse(['node', 'xdata-cli', 'decode', '[0xd6, 0xd0, 0xb9, 0xfa]', '--encoding', 'gbk']);
        // 中国
    });


});