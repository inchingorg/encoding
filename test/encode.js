var encode = require('../lib/encode');
var chai = require('chai');
chai.should();

describe('Encoding', function () {

    it('as default style', function () {
        encode.parse(['node', 'xdata', 'encode', '中国', '--encoding', 'gbk']);
    });

    it('as array style', function () {
        encode.parse(['node', 'xdata', 'encode', '中国', '--encoding', 'gbk', '--format', 'array']);
    });

    it('as hex map style', function () {
        encode.parse(['node', 'xdata', 'encode', '中国', '--encoding', 'gbk', '--format', 'map']);
    });

    it('as pretty style', function () {
        encode.parse(['node', 'xdata', 'encode', '中国', '--encoding', 'gbk', '--format', 'pretty']);
    });
});
