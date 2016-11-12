var chai = require('chai');
var assert = chai.assert;


describe('True Test', function(){

  it('should always succeed', function(){
    assert.strictEqual(true, true, 'these booleans are strictly equal');
  })

  it('should always fail', function(){
    assert.strictEqual(true, false, 'these booleans are strictly not equal');
  })

});
