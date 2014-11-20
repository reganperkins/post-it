$(document).ready(function() {

    interact('.resize')
    .resizable(true)
    .on('resizemove', function (event) {
      var target = event.target;

      // add the change in coords to the previous width of the target element
      var
        newWidth  = parseFloat(target.style.width ) + event.dx,
        newHeight = parseFloat(target.style.height) + event.dy;

      // update the element's style
      target.style.width  = newWidth + 'px';
      target.style.height = newHeight + 'px';

      target.textContent = newWidth + '×' + newHeight;
    });

  /*  Navigation  */

  $(function() {
      $('#settings').click(function(){
        $('.subMenu').slideToggle();
      });
  });

});