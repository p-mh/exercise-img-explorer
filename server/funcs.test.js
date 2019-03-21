const Funcs = require('./funcs');
const flattenDeep = require('lodash.flattendeep');

describe('recursiveGet', () => {
  test('recursiveGet should return an array', () => {
    expect(Funcs.recursiveGet(['images'], './')).toEqual(expect.any(Array));
  });

  test('recursiveGet should return an array', () => {
    expect(
      flattenDeep(Funcs.recursiveGet(['sleepingKitten'], './images/kitten'))
    ).toHaveLength(2);
  });
});

describe('getDatas', () => {
  test('getDatas should return an object', () => {
    expect(Funcs.getDatas('./images')).toEqual(expect.any(Object));
  });
  test('getDatas should return an object with correct keys', () => {
    expect(Funcs.getDatas('./images')).toHaveProperty('directories');
    expect(Funcs.getDatas('./images')).toHaveProperty('images');
  });
});
