const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')


// using describe it and assert
describe('Math class', function(){
    it('sum two numbers', function(){
        const math = new Math();
        assert.equal(math.sum(5,5), 10); 
})
    it('multiple two number', function(){
        const math = new Math();
        assert.equal(math.multiply(10,10), 100);
})
    it('divide two number', function(){
        const math = new Math();
        assert.equal(math.divide(1000,25), 40);
})
    it('subtract two numbers', function(){
        const math = new Math();
        assert.equal(math.subtract(15, 10), 5);
})



// using describe and Chai Expect - best and easier!
describe('Math with expect', function(){
    it('sum two numbers', function(){
        const math = new Math();
        expect(math.sum(5,5)).to.be.equal(10)
    })
})

// expect with other properies

describe('Check a property', function(){
    it('check a property of a list', function(){
        const math = new Math();
        let password = 2004
        const login = {
            name: "João",
    };
    expect(login).to.have.property('name') 
    expect(password).to.deep.equal(2004)
    })
})
})

// Sinon
  
it('Calls a res with sum and index value', function(){
    const req = {};
    const res = {
        load: sinon.spy()// the two methods need this to work, it spy the function.
    };
    const math = new Math();
    math.printSum(req, res, 5, 5)
    expect(res.load.calledOnce).to.be.true // it Works
    expect(res.load('index', 10)) // it works too
})

it("calling a res using ", function(){
    const req = {};
    const res = {
        load: function load(){ 
            console.log("called!")
        } 
    };

    sinon.spy(res, 'load')
    const math = new Math();
    math.printSum(req, res, 5, 5)
})

