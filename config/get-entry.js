/**
 * @project: 获取entry文件入口
 * @author: wyg
 * @date: 2019-08-27
 */
const fs = require("fs");

/**
 * 【获取entry文件入口】
 *
 * @param {String} path 路径
 * @returns {Object} 返回的entry { "index":"./src/index/index.js",...}
 */
module.exports = function getEntry(path){
    let entry = {};
    let existpath = fs.existsSync(path); // 是否存在目录
    if(existpath){
      let readdirSync = fs.readdirSync(path);  // 获取目录下所有文件
      readdirSync.map((dir)=>{
        dir = dir.toLocaleLowerCase(); // 文件件名转小写
        let currentPath = `${path}/${dir}`;
        let isDirector = fs.statSync(currentPath).isDirectory(); // 判断是否是一个文件夹
        if(isDirector && dir !== "component"){
      /**
       * 下面输出格式为{"about/about":".src/aobout/index.js"}
       * 这样目的是为了将js打包到对应的文件夹下
       */
        entry[`${dir}`] = `${currentPath}/index.js`;
        }
      });
      return entry;
    }
};

