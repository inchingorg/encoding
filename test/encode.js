var encode = require('../lib/encode');
var sinon = require("sinon");

var chai = require("chai");
chai.use(require("sinon-chai"));

chai.should();

describe('Encoding', function () {
    beforeEach(function () {
        this.sinon = sinon.sandbox.create();

        this.sinon.stub(console, 'log');
    });

    afterEach(function () {
        this.sinon.restore();
    });

    it('as default style', function () {
        encode.parse(['node', 'encode', '中国', '--encoding', 'gbk']);

        console.log.should.be.calledWith('d6d0b9fa');
    });

    it('as array style', function () {
        encode.parse(['node', 'encode', '中国', '--encoding', 'gbk', '--format', 'array']);
        console.log.should.be.calledWith('[0xd6, 0xd0, 0xb9, 0xfa]');
    });

    it('as hex map style', function () {
        encode.parse(['node', 'encode', '中国', '--encoding', 'gbk', '--format', 'map']);
        console.log.should.be.calledOnce;
    });

    it('as pretty style', function () {
        encode.parse(['node', 'encode', '中国', '--encoding', 'gbk', '--format', 'pretty']);
        console.log.should.be.calledWith('d6 d0 b9 fa');
    });
});
