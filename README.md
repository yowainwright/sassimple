![sassimple](https://cloud.githubusercontent.com/assets/1074042/18115410/166c989e-6ef4-11e6-85ef-6e5cf28ebe1b.jpg)

<h1 align="center"> 🛠 Sassimple</h1>

[![1.2.4](https://badge.fury.io/js/sassimple.svg)](https://badge.fury.io/js/sassimple)
[![0.0.7](https://badge.fury.io/bo/sassimple.svg)](https://badge.fury.io/bo/sassimple)

> Fill in your `css` gaps with the best `scss` mixins

Sassimple is buffet of the best `scss` mixins with 0% css footprint when included into a project!

## Install

```bash

npm i sassimple

```

## Setup

```css

@import 'node_modules/sassimple/mixins/sassimple';

```

## Use

```css

.button {
  @include button; // imports button styles from bourbon
}

```

## Philosophy

- Use popular `scss` mixins to solve css problems.
- Fully use popular scss helper mixins or don't - Sassimple is there.

## Why

- You don't want to use a css framework but want a css framework's helper `scss` mixins.
- You want to have lots of ready to use mixins at your service whether you use them or not.

## \*Mixin Reference

- [Bootstrap](http://getbootstrap.com/) (without the framework's css classes) for _normalization_ to the most used ui library on the internet,
- [Bourbon](http://bourbon.io/) for styles helpers like _css transitions_,
- [Neat](http://neat.bourbon.io/) for a faceless (no css classes) grid,
- [Compass](http://compass-style.org/) for autoprefixing css & other helpers - [Sassimple](https://github.com/yowainwright/sassimple/tree/master/mixins) to add to the layer cake of supported mixins

## Create an [issue](https://github.com/yowainwright/sassimple/issues)

Create an issue if you'd like a scss library or mixin to be added or, if you have recommendations

🛠 **Sassimple** is a current project 👍.
