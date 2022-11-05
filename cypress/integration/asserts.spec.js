/// <reference types="cypress" />


it('Equality', () => {
    const a = 1
    expect(a).equal(1);
    expect(a, 'deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')

})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;
    expect(a).to.be.true;
    expect(false).to.be.false;
    expect(b).to.be.null
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;

})

it('Object Equality', () =>{
    const obj = {
        a: 1,
        b:2
    }
    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({
        a:1,
        b:2
    })

})

it('Numbers', () =>{
    const number = 4
    const floatNumber = 5.2123
    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)

})