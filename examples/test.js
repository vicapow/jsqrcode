
var Canvas = require('canvas')
  , Image = Canvas.Image
  , qrcode = require('../src/qrcode.js')(Canvas)

var filename = __dirname + '/qrcode.png'

var image = new Image()
image.onload = function(){
  var result;
  try{
    result = qrcode.decode(image)
    console.log('result of qr code: ' + result);
  }catch(e){
    console.log('unable to read qr code');
  }
}
image.src = filename
