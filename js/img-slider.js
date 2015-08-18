var imageSlider = {};

imageSlider.init = function ( options ) {
  var slider = $(options.slider);
  var caption = options.caption;
  var projName = options.projName;

  slider.addClass('ics-slider');
  $(caption).addClass('ics-caption');
  $(projName).addClass('ics-proj-name');

  slider.click(function () {
    $(this).children(caption).toggleClass( 'ics-collapse' );
  })
};
