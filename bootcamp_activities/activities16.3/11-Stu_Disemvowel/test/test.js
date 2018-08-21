var should = require("chai").should();
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
    it('should remove all vowels from lower case', function(){
        disemvowel('this is lowercase').should.equal('ths s lwrcs');
    });
    it ('should remove all upper lower/case vowels', function(){
        disemvowel('THIS IS UPPERcase').should.equal('THS S PPRcs');
    
    });
    it ('should remove all vowels from mixed strings', function(){
        disemvowel('this IS mixed').should.equal('ths S mxd');
    
    });
    it ('should remove all vowels from mixed strings', function(){
        disemvowel('this IS mixed').should.equal('ths S mxd');

    });

    it ('should cast number into strings', function(){
        disemvowel(10971).should.equal('10971');

    });



});