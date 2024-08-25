const  pot  = require('./pot/pot.js')
const  config = require('./config/config.js')
const  postconfig = require('./postConfig/postConfig.js')

v = 'visitorData' // responseContext.visitorData

p = 'videoPlaybackUstreamerConfig' // playerConfig.mediaCommonConfig.mediaUstreamerRequestConfig.videoPlaybackUstreamerConfig

v = pot.getVisitor(v)

p = config.getProg(p)
v= config.getVisitor(v)

console.log(v)
console.log(p)

postconfig.getConfig(v, p)