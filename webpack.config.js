const path = require('path');

module.exports={
  // mode:"production",
  mode:"development",
  entry:'./src/index.js',
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,'dist') //默认也是dist文件夹
  }
}