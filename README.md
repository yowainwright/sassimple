# scss-utility-mixins

> Project Goal: provide useful scss mixins in 1 place.

## `scss-utility-mixins` provides

- [Bootstrap](http://getbootstrap.com/)
- [Foundation](http://foundation.zurb.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Sassline](https://sassline.com/)
- Plus, other helper mixins

## Philo'

- All the best mixins in 1 place.
- Use mixins or don't.
- Use a frmework or don't.

## Use Case

Fill in the gaps with a `scss utilities mixins`. 

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
No framework css classes required but you can use them if you'd like.

## Install

`bower install scss-utility-mixins`

## Mixins

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

From [foundation](http://foundation.zurb.com/)

```sass
@import 'foundation/components/grid';
@import 'foundation/components/accordion';
@import 'foundation/components/alert-boxes';
@import 'foundation/components/block-grid';
@import 'foundation/components/breadcrumbs';
@import 'foundation/components/button-groups';
@import 'foundation/components/buttons';
@import 'foundation/components/clearing';
@import 'foundation/components/dropdown';
@import 'foundation/components/dropdown-buttons';
@import 'foundation/components/flex-video';
@import 'foundation/components/forms';
@import 'foundation/components/icon-bar';
@import 'foundation/components/inline-lists';
@import 'foundation/components/joyride';
@import 'foundation/components/keystrokes';
@import 'foundation/components/labels';
@import 'foundation/components/magellan';
@import 'foundation/components/orbit';
@import 'foundation/components/pagination';
@import 'foundation/components/panels';
@import 'foundation/components/pricing-tables';
@import 'foundation/components/progress-bars';
@import 'foundation/components/range-slider';
@import 'foundation/components/reveal';
@import 'foundation/components/side-nav';
@import 'foundation/components/split-buttons';
@import 'foundation/components/sub-nav';
@import 'foundation/components/switches';
@import 'foundation/components/tables';
@import 'foundation/components/tabs';
@import 'foundation/components/thumbs';
@import 'foundation/components/tooltips';
@import 'foundation/components/top-bar';
@import 'foundation/components/type';
@import 'foundation/components/offcanvas';
@import 'foundation/components/visibility';

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

From `scss-utility-mixins`

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


