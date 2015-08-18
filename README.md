# Image Slider

Image Slider is a simple jQuery plug-in to let you add a nice slide-over title
and caption for images on your website. It's pretty light-weight and easy to
use.

## Requirements
+ [jQuery (2.1.4)]()
+ [Normalize.css (3.0.2)](https://necolas.github.io/normalize.css/)

## Set Up
1. Import Normalize.css and jQuery
2. Import img-slider.js and img-slider.css

The basic set-up of image box requires an element to hold the image-box, with
the following parameters. You may use any selector or class that you want since
you'll be initializing the plug-in in a script tag. The element to hold the
image-box requires a few things, a `<p>` tag with a nested `<span>` to hold the
title for the image and a `<small>` tag to hold the caption.

### Example

    <div class="slider">
      <p class="caption">
        <span class="title">Hello, World</span>
        <br>
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aut quia eveniet qui quisquam perferendis, dicta aliquam blanditiis incidunt magni numquam unde autem illum voluptatibus sunt tempore. Cupiditate, est? Quasi.</small>
      </p>
    </div>

*Note: your class names are not required to be the same*

### Initializing Image Slider

Once you've got your html ready, you'll need to initialize image slider. To do
so, use the following code snippet (replacing the class selectors with the ones
you used).

    <script type="text/javascript">
      imageSlider.init({
        slider: '.slider',
        caption: '.caption',
        title: '.title'
      });
    </script>

You now have your very own image-slider! Check out the [demo on CodePen](http://codepen.io/anon/pen/OVYBNx).
