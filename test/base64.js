var program = require('../lib/base64');
var assert = require('assert');
var iconv = require('iconv-lite');

describe('Base64', function () {
    it('encode', function(){
        program.parse(['node', 'base64', 'e', '中国', '--encoding', 'gbk']);
    });

    it('decode', function(){
        program.parse(['node', 'base64', 'd', '1tC5+g==', '--encoding', 'gbk']);
    });
});
