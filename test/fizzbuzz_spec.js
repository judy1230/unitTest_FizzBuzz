let should = chai.should()
describe('function fizzBuzz', function () {
	it('number divided by 3, return Fizz ', function () {
		var result = fizzBuzz(9)
		result.should.be.equal('Fizz')
	})
	it('number divided by 5, return Buzz', function () {
		var result = fizzBuzz(10)
		result.should.be.equal('Buzz')
	})
	it('number divided by 3 and 5, return FizzBuzz', function () {
		var result = fizzBuzz(15)
		result.should.be.equal('FizzBuzz')
	})
	it('number cannot divided by 3 or 5, return number', function () {
		var result = fizzBuzz(7)
		result.should.be.equal(7)
	})
})