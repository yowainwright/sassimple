# 🛠 Sassimple

> Fill in your `css` gaps & with awesome work that is already done (using `scss` mixins)

## Install

`bower install sassimple`

`npm install sassimple`

## *Setup

### Gulp

*Basic*

```javascript
	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var sassGlob = require('gulp-sass-glob');

	gulp.task('styles', function() {
  return gulp
    .src('client/src/styles/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/* your desired file path */'));

  gulp.task('default', ['styles']);

```

*Basic but better*

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
> \* 📌 More setups to come. *Note:* sass is fundamentally a ruby gem so there is inherently an extra build step with *Sassimple*. However, the convenience of _lots_ of battle tested mixins after an exta setup step easily makes it worthwhile. + *Sassimple* has it's own helper mixins.

## Awesome *3rd party sass libraries

- [Bootstrap](http://getbootstrap.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Sassline](https://sassline.com/)
- Plus, other helper _Sassimple_ mixins

* use _3rd party_ sass libraries how you want

## Philosophy

- `Scss` mixins to fill in your simple _or_ complex css problems.
- Use _Sassimple_ mixins or don't.
- Use a css framework or don't.
- 0% css inprint on install

## Examples

### 1. Code parity use case

> Writing a mixin in a code parity pattern

- In this example a button mixin is used to define a pattern of *_normalizing_ a `<button>`

*normalizing: just means making it behave the same. _Normalizing_ is often done for browsers but it can also be done for team succinctness as well.  

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

Look at your HTML
```html
<form class="checkout">
    <button class="checkout__button checkout__button--finish"></button>
</form>
```

Write your SCSS
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

### 2. Do complex stuff 

> Use a mixin to do complex css

- In this we'll middle align a div 

Here's a mixin
```sass
@mixin middle-align($position: absolute) {
  left: 50%;
  position: $position;
  top: 50%;
  @include prefix(transform, translate(-50%, -50%), webkit ms moz);
} 
```

Look at your HTML
```html
<div>
	<div class="middle-align"></div>
</div>
```

Write your SCSS
```sass
.middle-align {
	@include middle-align;
}
```
- After minor tweaking, you'll no longer have to think about middle aligning that pesky `<div>`.
## Current Sassimple Mixins

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
*More coming soon!*

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
