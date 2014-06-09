var qrcode = require('../../src/qrcode')();

// prevent default behavior from changing page on dropped file
window.ondragover = function(e) {
  e.preventDefault();
  return false;
};
window.ondrop = function(e) {
  e.preventDefault();
  return false;
};

var holder = document.getElementById('holder');
holder.ondragover = function () { this.className = 'hover'; return false; };
holder.ondragend = function () { this.className = ''; return false; };
holder.ondrop = function (e) {
  e.preventDefault();
  holder.innerText = '';
  var fileName = e.dataTransfer.files[0].path;

  var image = new Image();

  image.onload = function () {
    var result;
    try{
      result = qrcode.decode(image);
      alert('result of qr code: ' + result);
    } catch(e) {
      console.log('unable to read qr code' + e.stack);
    }
  };

  image.src = fileName;

  return false;
};

