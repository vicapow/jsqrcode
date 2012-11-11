# A Node.JS port of Lazar Laszlo's [jsqrcode](https://github.com/LazarSoft/jsqrcode) for decoding QR Codes.

Now you can use it in node or in the browser!

## Usage

````javascript
    var Canvas = require('canvas')
      , Image = Canvas.Image
      , qrcode = require('jsqrcode')(Canvas)

    var filename = __dirname + '/qrcode.png'

    var image = new Image()
    image.onload = function(){
      var result;
      try{
        result = qrcode.decode(image);
        console.log('result of qr code: ' + result);
      }catch(e){
        console.log('unable to read qr code');
      }
    }
    image.src = filename
````