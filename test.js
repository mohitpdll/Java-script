const chai = require('chai')
,assert = chai.assert
,expect = chai.expect
,should=chai.should()


describe('string',function(){
    let name = 'John'
    it('should be of type string', function(){

        before(function(){
            //runs once before the first test in this block
            console.log('Before Hook')
        });

        after(function(){
            //runs once after the lest test in the block
            console.log('After Hook')
        })

        beforeEach(function(){
            //runs before each test in this block
            console.log("Before Each Hook")
        })

        afterEach(function(){
            //runs after each test in this block
            console.log('after Each Hook')
        })





        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name,'string')
    })

    it('should contain John',function(){
        name.should.not.equal('Kate')
        expect(name).to.equal('John')
        assert.equal(name,'John')
    })
})