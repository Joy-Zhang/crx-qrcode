require.config({
  baseUrl: '../..',
  shim: {
    'lib/qrcode.min': {
      exports: 'QRCode'
    },
    'lib/jquery.min': {
      exports: '$'
    }
  }
});


require(['lib/jquery.min', 'lib/qrcode.min'], function ($, QRCode) {

  var qrCode = new QRCode(document.getElementById('qr-code'), {
    width: 256,
    height: 256,
    colorDark: '#111111',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
  $('button').on('click', function () {
    var key = this.dataset.key;
    chrome.storage.local.get(key, function (items) {
      if(items[key] !== undefined) {
        qrCode.makeCode(items[key]);
      }
    });
  });

  $('button').first().trigger('click');
});