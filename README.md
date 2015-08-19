# Image Slider

Image Slider is a simple jQuery plug-in to let you add a nice slide-over title
and caption for images on your website. It's pretty light-weight and easy to
use.

**[DEMO](http://akbarbmirza.github.io/img-slider/)**

## Requirements
+ [jQuery (2.1.4)]()
+ [Normalize.css (3.0.2)](https://necolas.github.io/normalize.css/)

## Set Up
1. Import Normalize.css and jQuery
2. Import img-slider.js and img-slider.css

The basic set-up of image box requires an element to hold the image-box, with
the following parameters. You may use any selector or class that you want since
you'll be initializing the plug-in in a script tag. The element to hold the
image-box requires a few things, a container for the slider and a nested
container for the caption. Inside the caption container, we'll have a heading
element for your title and a `<p>` for your description.

### Example

    <div class="slider">
      <div class="caption">
        <h3 class="title">Hello, World</h3>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates odio autem, est quasi odit voluptas, hic exercitationem architecto dolore quia sapiente ducimus fuga ea, modi in blanditiis pariatur eum maxime.
        </p>
      </div>
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
