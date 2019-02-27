const Funcs = require('./funcs');
const FsFuncs = require('./fsFuncs');

// jest.mock('./fsFuncs');

describe('recursiveGet', () => {
  //   test('should ', () => {
  //     Funcs.recursiveGet(['images'], '.');
  //     expect(FsFuncs.getChildFolders).toHaveBeenCalled();
  //   });
  test('recursiveGet should return an array', () => {
    expect(Funcs.recursiveGet(['images'], '.')).toEqual(expect.any(Array));
  });
});

describe('getDatas', () => {
  test('getDatas should return an object', () => {
    expect(Funcs.getDatas('./')).toEqual(expect.any(Object));
  });
});
