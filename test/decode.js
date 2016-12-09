var program = require('..');
var sinon = require("sinon");
var chai = require("chai");
chai.use(require("sinon-chai"));

chai.should();


describe('Decode', function () {
    beforeEach(function () {
        this.sinon = sinon.sandbox.create();

        this.sinon.stub(console, 'log');
    });

    afterEach(function () {
        this.sinon.restore();
    });

    it('decode pretty hex', function () {
        program.parse(['node', 'xdata-cli', 'decode', 'd6 d0 b9 fa', '--encoding', 'gbk']);
        console.log.should.be.calledWith('中国');
    });

    it('decode compressed hex', function () {
        program.parse(['node', 'xdata-cli', 'decode', 'd6d0b9fa', '--encoding', 'gbk']);
        console.log.should.be.calledWith('中国');
    });

    it('decode array hex', function () {
        program.parse(['node', 'xdata-cli', 'decode', '[0xd6, 0xd0, 0xb9, 0xfa]', '--encoding', 'gbk']);
        console.log.should.be.calledWith('中国');
    });


});