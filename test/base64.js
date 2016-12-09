var program = require('..');
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
        program.parse(['node', 'xdata-cli', 'base64', 'encode', '中国', '--encoding', 'utf-8']);

        console.log.should.be.calledWith('5Lit5Zu9');
    });

    it('decode', function () {
        program.parse(['node', 'xdata-cli', 'base64', 'd', '5Lit5Zu9', '--encoding', 'utf-8']);
        console.log.should.be.calledWith('中国');
    });
});
