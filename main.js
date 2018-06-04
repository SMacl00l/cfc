
function hexToRgb(h) {
  var i = parseInt(h, 16);
  return "rgb("+((i >> 16) & 255) + "," +
         ((i >> 8) & 255) + "," +
         (i & 255) + ")";
};

function resetElem(elem) {
  $(elem).val('');
  elem.blur();
}

// onetime pass on page load to make highlight-able text areas
$('li').each(function () {
  $(this).html('<input type="text" style="background: #' + $(this).attr('swatch') + ';" />' );
});

// setup listener on all <ul> tags to be clicked
$('ul').click(function (e) {
  var elem = e.target;
  if ($(elem).is('input')) {
    // get the hex value by reading the clicked "swatch" attribute
    var display = $(elem).parent().attr('swatch');

    // conditionally convert it to rgb
    if (isHex == 2){
      display = hexToRgb(display);
    }

    // fill the text area with our computed hex/rgb
    $(elem).val(display);
    elem.focus();
    elem.select();

    // set timeout 5500 milliseconds
    setTimeout(function () { resetElem(elem) }, 5500);
  }
});

var isHex = 1;
$("#changeValue").click(function() {
   if(isHex == 1) {
      isHex = 2;
   } else {
      isHex = 1;
   }
});
