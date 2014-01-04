/*!
                        
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global document*/

// Add a new style block to the head ontaining the selectors and their associated declarations
function addStyles(styleObj) {
    "use strict";
    // Init vars
    var styleString = '', selector, declarationBlock, declaration, styleElement;
    // Loop styleObj to create string
    for (selector in styleObj) {
        if (styleObj.hasOwnProperty(selector)) {
            // Construct selector and open the declaration block
            styleString += selector + '{';
            declarationBlock = styleObj[selector];
            // Loop through each declaration in the block and add it
            for (declaration in declarationBlock) {
                if (declarationBlock.hasOwnProperty(declaration)) {
                    styleString += declaration + ': ' + declarationBlock[declaration].replace(/;/g, '') + ';';
                }
            }
            // Close the declaration block
            styleString += '}';
        }
    }

    // Create new element with the styles and add it to head
    styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    if (styleElement.styleSheet) {
        // IE
        styleElement.styleSheet.cssText = styleString;
    } else {
        styleElement.appendChild(document.createTextNode(styleString));
    }
    document.getElementsByTagName('head')[0].appendChild(styleElement);
}