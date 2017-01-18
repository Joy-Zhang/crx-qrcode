;(function () {
  var display = function() {

    var id = 'crx-qrcode-container';
    var container = document.getElementById(id);
    if(container === null) {
      container = document.createElement('div');
      container.id = id;
      container.style.width = '128px;';
      container.style.height = '128px;';
      container.style.position = 'absolute';
    }

  }

})();