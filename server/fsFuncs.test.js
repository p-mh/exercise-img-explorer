const { getType, getChildFolders } = require('./fsFuncs');

const fs = require('fs');
jest.mock('fs');

describe('getType', () => {
  const fsStatSync = jest.fn(() => {});
  beforeEach(() => (fs.statSync = fsStatSync));
  afterEach(() => fs.statSync.mockRestore());
  test('fs.statSync should have been called', () => {
    getType('./path');
    expect(fsStatSync).toHaveBeenCalled();
  });
  test('fs.statSync should have been called with correct params', () => {
    getType('./path');
    expect(fsStatSync).toHaveBeenCalledWith('./path');
  });
});

describe('getChildFolders', () => {
  const fsReadDirSync = jest.fn(() => {});
  beforeEach(() => (fs.readdirSync = fsReadDirSync));
  afterEach(() => fs.readdirSync.mockRestore());
  test('fs.statSync should have been called', () => {
    getChildFolders('./path');
    expect(fsReadDirSync).toHaveBeenCalled();
  });
  test('fs.statSync should have been called with correct params', () => {
    getChildFolders('./path');
    expect(fsReadDirSync).toHaveBeenCalledWith('./path');
  });
});
