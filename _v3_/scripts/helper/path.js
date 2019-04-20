const path = require('path');
const fs = require('fs-extra');

const isInstalled = fs.pathExistsSync(path.resolve(__dirname, '../../../../package.json'));

// Framework related shortcuts
path.framework = (...nav) => path.resolve(__dirname, '../../', ...nav);
path.cache = (...nav) => path.resolve(__dirname, '../../.cache', ...nav);
path.scripts = (...nav) => path.resolve(__dirname, '../', ...nav);

// Project related shortcuts
path.project = (...nav) => path.resolve(__dirname, isInstalled ? '../../../../' : '../../', ...nav);
path.app = (...nav) => path.resolve(__dirname, isInstalled ? '../../../../app' : '../../demo-app', ...nav);

module.exports = path;
