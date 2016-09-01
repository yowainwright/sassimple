![sassimple](https://cloud.githubusercontent.com/assets/1074042/18115410/166c989e-6ef4-11e6-85ef-6e5cf28ebe1b.jpg)

## 🛠 Sassimple

[![1.1.3](https://badge.fury.io/js/sassimple.svg)](https://badge.fury.io/js/sassimple)
[![0.0.3](https://badge.fury.io/bo/sassimple.svg)](https://badge.fury.io/bo/sassimple)

> Fill in your `css` gaps & with awesome work that is already done (using `scss` mixins)

🛠 &nbsp;Sassimple pulls in sass mixin libraries & adds mixins of its own to help you write your sass faster. 

Sassimple brings in **[Bootstrap](http://getbootstrap.com/)** without the css classes for _normalization_ of things like `buttons`, **[Bourbon](http://bourbon.io/)** for styles helpers on things like _css transitions_, **[Neat](http://neat.bourbon.io/)** for a faceless (no css classes) grid, **[Compass](http://compass-style.org/)** for autoprefixing stuff & other helpers, **[Sassline](https://sassline.com/)** for font sizes & lineheights AND THEN 🛠&nbsp;**Sassimple** adds a few more common mixins to do to complex things. 

## Install

`bower install sassimple`

`npm install sassimple`

## Setup

📌 &nbsp;Once you've imported Sassimple, you can `@import` your `_sassimple.scss` parial. 

## Philosophy

- Use `Scss` mixins to fill in your simple _or_ to solve some more complex css problems.
- Use _Sassimple_ mixins or don't.
- Use a css framework or don't.
- 🛠 **0% css inprint on install**

## Examples

### 1. Code parity use case

> Writing a mixin in a code parity pattern

In this example a button mixin is used *_normalize_ `<button>` styles.

\* normalize: just means making it behave the same. _Normalizing_ is often done for browsers but it can also be done for team succinctness as well.  

Here's a mixin
```sass
@mixin button ($backgrondColor = transparent, $padding = 0, $border = 0, $margin = 0, $outline: 0, $padding = 0) {
		background-color: $backgrondColor;
    border: $border;
    cursor: pointer;
    margin: $margin;
    outline: $outline;
    padding: $padding;
}

```

& HTML
```html
<form class="checkout">
    <button class="checkout__button checkout__button--finish"></button>
</form>
```

with SCSS
```sass
.checkout {
	&--button {
		@include button(you, got, it, all);
		&--finish{
			css-rule: and-then-some;
		}
	}
}
```
- No framework css classes required but you can use them if you'd like.
- 🛠 &nbsp;**Solved** You now have a basic button normalization

### 2. Do complex stuff 

> Use a mixin to do complex css

In this example we'll middle align a div 

Here's a mixin
```sass
@mixin middle-align($position: absolute) {
  left: 50%;
  position: $position;
  top: 50%;
  @include prefix(transform, translate(-50%, -50%), webkit ms moz);
} 
```

& HTML
```html
<div>
	<div class="middle-align"></div>
</div>
```

with SCSS
```sass
.middle-align {
	@include middle-align;
}
```
- 🛠 &nbsp;**Solved:** After minor tweaking, you'll no longer have to think about middle aligning anything.

*Note:* sass is fundamentally a ruby gem so there is inherently an extra build step with *Sassimple*. However, the convenience of _lots_ of battle tested mixins after an exta setup step easily makes it worthwhile. + *Sassimple* has it's own helper mixins.

## Basic Sassimple setup examples

### Reference the `_sassimple.scss` partial right from `bower` or `npm`:

```sass

// in sass file (with bower)
@import 'bower_components/sassimple/mixins/sassimple';

// or (with npm)
@import 'node_modules/sassimple/mixins/sassimple';

```

### Reference Sassimple more cleaning in a build tool (like gulp as demonstrated here):

```javascript
  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var sassGlob = require('gulp-sass-glob');

  gulp.task('styles', function() {
  return gulp
    .src('client/src/styles/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({
      extension: 'scss',
      includePaths: [
        'bower_components/sassimple/'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('/* your desired file path */'));

  gulp.task('default', ['styles']);

```

## Reference

From *Sassimple*

```sass
@import "browser/appearance";
@import "browser/prefix";
@import "browser/ie/8";
@import "browser/ie/9";
@import "browser/ie/10_11";
@import "decoration/stripes";
@import "element/button";
@import "element/progress";
@import "element/submit";
@import "layout/clearfix";
@import "layout/positioning";
@import "layout/clearfix";
@import "media/image/circle";
@import "media/video/play_button_circle";
@import "media/video/play_button_rounded";
@import "media/video/timer";
@import "text/font_sizing";

```
🛠 &nbsp;**More coming soon!**

From [bootstrap sass](https://github.com/twbs/bootstrap-sass)

```sass
@import "mixins/hide-text";
@import "mixins/opacity";
@import "mixins/image";
@import "mixins/labels";
@import "mixins/reset-filter";
@import "mixins/resize";
@import "mixins/responsive-visibility";
@import "mixins/size";
@import "mixins/tab-focus";
@import "mixins/reset-text";
@import "mixins/text-emphasis";
@import "mixins/text-overflow";
@import "mixins/vendor-prefixes";
@import "mixins/alerts";
@import "mixins/buttons";
@import "mixins/panels";
@import "mixins/pagination";
@import "mixins/list-group";
@import "mixins/nav-divider";
@import "mixins/forms";
@import "mixins/progress-bar";
@import "mixins/table-row";
@import "mixins/background-variant";
@import "mixins/border-radius";
@import "mixins/gradients";
@import "mixins/clearfix";
@import "mixins/center-block";
@import "mixins/nav-vertical-align";
@import "mixins/grid-framework";
@import "mixins/grid";

```

From [sassline](https://sassline.com/)

```sass

@mixin breakpoint;
@mixin rootsize;
@mixin maxwidth;
@mixin measure;
@mixin ideal-measure;
@mixin fontsize;
@mixin baseline;
@mixin sassline;

```
