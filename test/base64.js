var program = require('../lib/base64');
var sinon = require("sinon");

var chai = require("chai");
chai.use(require("sinon-chai"));

chai.should();


describe('Base64', function () {
    beforeEach(function () {
        this.sinon = sinon.sandbox.create();

        this.sinon.stub(console, 'log');
    });

    afterEach(function () {
        this.sinon.restore();
    });

    it('encode', function () {
        program.parse(['node', 'base64', 'e', '中国', '--encoding', 'gbk']);

        console.log.should.be.calledWith('1tC5+g==');
    });

    it('decode', function () {
        program.parse(['node', 'base64', 'd', '1tC5+g==', '--encoding', 'gbk']);
        console.log.calledWith('中国').should.be.true;
    });
});
