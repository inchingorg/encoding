var assert = require('assert');
var encoding = require('encoding');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe("encoding", function(){
    it('should return -1 when the value is not present', function() {
      var result = encoding.convert("ÕÄÖÜ", "Latin_1");
      console.log(result); //<Buffer d5 c4 d6 dc>
    });
  });
});
