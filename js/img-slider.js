var imageSlider = {};

imageSlider.init = function ( options ) {
  var slider = $( options.slider );
  var caption = options.caption;
  var title = options.title;

  slider.addClass( 'ics-slider' );
  $( caption ).addClass( 'ics-caption' );
  $( title ).addClass( 'ics-title' );

  slider.click(function () {
    $( this ).children( caption ).toggleClass( 'ics-collapse' );
  })
};
