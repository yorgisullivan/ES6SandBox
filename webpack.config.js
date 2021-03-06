const path=require('path');

module.exports = {
  entry:['babel-polyfill','./app/index.js'],
  output:{
    path: path.join(__dirname, "build"),
    filename:'bundle.js',
    

  },
  module:{
    rules: [
      {    
          loader:'babel-loader',
          test: /\.js$/,
          exclude:/node_modules/

      }
    ]
  },
  devServer:{
    port:3000,
    contentBase:'./build',
    inline:true
  }
}