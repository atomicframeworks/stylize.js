# stylize.js
Dynamically add or remove CSS rules to the document <br>

## Use cases
Persistence - When using stylize.js styles are applied to elements exactly as if you had written and included a style sheet with the provided rules! Conversly adding styles to the DOM via jQuery .css() only applies the styles to existing elements. <br> <br>
Performace - There are significant performance gains when applying rules to multiple elements - [http://jsperf.com/stylize-vs-jquery](http://jsperf.com/stylize-vs-jquery)

## Installation
1. Include the source script in your html.  No other requirements to start using stylize.js! <br>
```html
<script src="stylize.js"></script>
```
This script will create the stylize function that can be used to append new styles to the stylize sheet in the document head.

## Usage

#### Adding styles
Call stylize(styleObj) to add styles containing the selectors and declarations. <br>
   
##### Example
```js

styleObj = {
    '*': {
        outline: '1px solid red'
    },
    '*:hover': {
        outline: '1px solid green'
    }
};

stylize(styleObj);
```

#### Removing properties
Set the property to null or undefined to remove it from the style declaration.

##### Example
```js

stylize({
	'*': {
        outline: null
    }
});
```


#### Removing a ruleset by selector
To remove all properties of a ruleset for a specific selector pass null or undefined for the style object.

##### Example
```js

stylize({
	'*': null
});
```


## License 
stylize.js is released under the MIT license <br>
[www.opensource.org/licenses/MIT](www.opensource.org/licenses/MIT)
