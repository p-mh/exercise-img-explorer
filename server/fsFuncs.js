const fs = require('fs');

const getType = path => fs.statSync(path);

const getChildFolders = path => fs.readdirSync(path);

module.exports = { getType, getChildFolders };
