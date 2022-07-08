/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2022-07-08 08:56:05
 * @LastEditTime: 2022-07-08 09:10:55
 * @LastEditors: liyoucheng
 */
const fs = require('fs')
const pathSep = require('path').sep;

// 输出主包清单
function manifest (path) {
  if (path.length) {
    const manifestFile = `./dist/common_manifest_${process.env.PLATFORM}.txt`;
    if (!fs.existsSync(manifestFile)) {
        fs.writeFileSync(manifestFile, path);
    } else {
        fs.appendFileSync(manifestFile, '\n' + path);
    }
  }
}

function createModuleIdFactory() {
  return function(path) {
    let name = '';
    if (path.startsWith(__dirname)) {
        name = path.substr(__dirname.length + 1);
    }
    let regExp = pathSep == '\\' ?
        new RegExp('\\\\', "gm") :
        new RegExp(pathSep, "gm");
    return name.replace(regExp, '_');
  }
}

function processModuleFilter(module) {
  manifest(module['path']);
  return true;
}

module.exports = {
  serializer: {
    createModuleIdFactory,
    processModuleFilter
  }
}