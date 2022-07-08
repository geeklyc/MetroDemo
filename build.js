/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2022-04-07 09:24:55
 * @LastEditTime: 2022-07-07 14:40:47
 * @LastEditors: liyoucheng
 */
const http = require('http')
const Metro = require('metro')

async function build() {
  const config = await Metro.loadConfig();

  console.log('【开始打包】')

  await Metro.runBuild(config, {
    entry: 'index.js', // 入口
    platform: 'ios', // 平台 ios android web
    minify: true, // 是否压缩
    out: 'dist/metro-ios.js', // 输出
    dev: true, // 是否开发版本
    onBegin: (res) => {
      console.log("打包开始", res)
    },
    onComplete: (res) => {
      console.log("打包完成", res)
    },
    onProgress: (res) => {
      console.log("打包中", res)
    }
  });

  console.log('【完成打包】')
}

build()


// Metro.loadConfig().then(async (config) => {

//   const metroBundleServer = await Metro.runMetro(config);

//   const httpServer = http.createServer(
//     metroBundleServer.processRequest.bind(metroBundleServer)
//   )

//   console.log('metro 执行')
//   httpServer.listen(8082)
// })

