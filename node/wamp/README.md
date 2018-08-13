因为 autobahn 这个库在运行时判断当前运行环境，所有如果用用 electron 打包前端程序时，会错误的判断为 node 环境。
只能修改一下源代码了。
if (global.process && global.process.versions.node) {

https://blog.csdn.net/u011112773/article/details/79473836
