const flattenDeep = require('lodash.flattendeep');
const { getType, getChildFolders } = require('./fsFuncs');

const recursiveGet = (arr, path) => {
  if (!arr.filter(elem => getType(`${path}/${elem}`).isDirectory()).length) {
    return arr.map(elem =>
      `${path}/${elem}`.replace(/.\/images/, '/animalsPhotos')
    );
  }
  return arr.map(elem => {
    if (getType(`${path}/${elem}`).isDirectory()) {
      const newArr = getChildFolders(`${path}/${elem}`);
      return recursiveGet(newArr, `${path}/${elem}`);
    }
    return `${path}/${elem}`.replace(/.\/images/, '/animalsPhotos');
  });
};

const getDatas = path => {
  const childElementsFolders = getChildFolders(path);

  const directories = childElementsFolders
    .filter(elem => getType(`${path}/${elem}`).isDirectory())
    .map(elem => ({
      dirTitle: elem,
      path: `${path}/${elem}`.replace(/.\/images\//, ''),
    }));
  const images = flattenDeep(recursiveGet(childElementsFolders, path));

  return { directories, images };
};

module.exports = { getDatas, recursiveGet };
