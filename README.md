# scss-utility-mixins

> What if I told you there was a place where you could pull in a bunch of useful scss mixins but you didn't have to deal with any dependencies? 

The purpose of this repo is to give you a ton of scss mixins that you can bring in with bower so you don't have to write a bunch of css mixins yourself.

1. Make your own css for your own product.

2. Or, use a framework. This package doesn't care.

3. If you don't use any of these mixins, your compiled css will not know or care that this package was in your repo.

4. Only use the mixins you want. 

## Idea

Fill in the gaps with a `scss utilities mixins`. 

1. Here's a mixin
```
@mixin button ($backgrondColor = transparent, $padding = 0, $border = 0, $margin = 0, $outline: 0, $padding = 0) {
		background-color: $backgrondColor;
    border: $border;
    cursor: pointer;
    margin: $margin;
    outline: $outline;
    padding: $padding;
}

```

3. Look at your HTML.
```
<form class="checkout">
    <button class="checkout__button checkout__button--finish"></button>
</form>
```

4. Write your SCSS.
```
.checkout {
	&--button {
		@include button(you, got, it, all);
		&--finish{
			css-rule: and-then-some;
		}
	}
}
```
No funky framework classes required.