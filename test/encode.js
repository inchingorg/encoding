var program = require('../lib');
var chai = require('chai');
chai.should();

describe('Encoding', function () {

    it('as default style', function () {
        program.parse(['node', 'xdata-cli1', 'encode', '中国', '--encoding', 'gbk']);
    });

    it('as array style', function () {
        program.parse(['node', 'xdata-cli1', 'encode', '中国', '--encoding', 'gbk', '--format', 'array']);
    });

    it('as hex map style', function () {
        program.parse(['node', 'xdata-cli1', 'encode', '中国', '--encoding', 'gbk', '--format', 'map']);
    });

    it('as pretty style', function () {
        program.parse(['node', 'xdata-cli1', 'encode', '中国', '--encoding', 'gbk', '--format', 'pretty']);
    });
});
