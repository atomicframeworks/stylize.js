# addStyles.js
Append a new style block to the head containing the selectors and their associated declarations <br>

## Installation
1. Include the source script in your html <br>
This script will create the addStyles function that can be used to append new style blocks to the document head.
```html
<script src="addStyles.js"></script>
```

## Requirements
addStyles.js requires jQuery to prevent cross browser issues ( mainly IE 6-7 )

## Usage
Call addStyles(styleObj) to create a new style block containing the selectors and declarations. <br>
   
#### Example
```js

styleObj = {
    '*': {
        outline: '1px solid red'
    },
    '*:hover': {
        outline: '1px solid green'
    }
};

addStyles(styleObj);

```

## License 
addStyles.js is released under the MIT license <br>
[www.opensource.org/licenses/MIT](www.opensource.org/licenses/MIT)
