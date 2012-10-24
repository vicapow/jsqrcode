
var Canvas = require('canvas')
  , Image = Canvas.Image
  , qrcode = require('jsqrcode')(Canvas)

var filename = __dirname + '/qrcode.png'

var image = new Image()
image.onload = function(){
  var result = qrcode.decode(image)
  console.log('result of qr code: ' + result);
}
image.src = filename
