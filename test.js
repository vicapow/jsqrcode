
var Image = require('canvas').Image
  , qrcode = require('./src/qrcode')

var filename = __dirname + '/qrcode.png'

console.log('loading file: '+filename)

require('fs').readFile(filename, function(err, data){
  if (err) throw err;
  var image = new Image()
  image.onload = function(){
    var result = qrcode.decode(image)
    console.log('result of qr code: ' + result);
  }
  image.onerror = function(e){ 
    throw e
  }
  image.src = data
})
