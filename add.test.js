const { exportAllDeclaration } = require('@babel/types');
const add = require('./add');

test('expecting the proper addititon of two number', () => {
    expect(add(1,2)).toBe(3);
});