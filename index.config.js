/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2022-07-08 08:56:05
 * @LastEditTime: 2022-07-08 10:19:33
 * @LastEditors: liyoucheng
 */
const fs = require('fs');

const pathSep = require('path').sep;
var commonModules = null;

// 是否已经在主包清单中
function isInManifest (path) {
    const manifestFile = `./dist/common_manifest_${process.env.PLATFORM}.txt`;

    if (commonModules === null && fs.existsSync(manifestFile)) {
        const lines = String(fs.readFileSync(manifestFile)).split('\n').filter(line => line.length > 0);
        commonModules = new Set(lines);
    } else if (commonModules === null) {
        commonModules = new Set();
    }

    if (commonModules.has(path)) {
        return true;
    }

    return false;
}

// 是否打入当前的包
function processModuleFilter(module) {
    if (isInManifest(module['path'])) {
        return false;
    }
    return true;
}

// 生成 require 语句的模块 ID
function createModuleIdFactory() {
    return path => {
        let name = '';
        if (path.startsWith(__dirname)) {
            name = path.substr(__dirname.length + 1);
        }
        let regExp = pathSep == '\\' ?
            new RegExp('\\\\',"gm") :
            new RegExp(pathSep,"gm");
        
        return name.replace(regExp,'_');
    };
}


module.exports = {
    serializer: {
        createModuleIdFactory,
        processModuleFilter,
    }
};