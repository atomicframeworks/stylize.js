/*
                        
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/

/*jslint 
    indent : 4, white : true 
*/
/*global 
    $
*/

// Add a new style block to the head containing the selectors and their associated declarations
function addStyles(styleObj) {
    "use strict";
    // Init vars
    var styleString = '', selector, declarationBlock, declaration;

    // Loop styleObj to create string
    for ( selector in styleObj ) {
        if ( styleObj.hasOwnProperty(selector) ) {

            // Construct selector and open the declaration block
            styleString += selector + '{';
            declarationBlock = styleObj[selector];

            // Loop through each declaration in the block and add it
            for ( declaration in declarationBlock ) {
                if ( declarationBlock.hasOwnProperty(declaration) ) {
                    styleString += declaration + ': ' + declarationBlock[declaration] + ';';
                }
            }

            // Close the declaration block
            styleString += '}';
        }
    }

    // Add the styles to the head
    $('<style type="text/css">' + styleString + '</style>').appendTo('head');

}