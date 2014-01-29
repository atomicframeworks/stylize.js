/*!
                        
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global document*/

var stylize = (function () {
    "use strict";
    // Create style element and add it to head
    var styleElement = document.createElement('style'),
        styleSheet,
        rules;
    styleElement.type = 'text/css';
    styleElement.id = 'stylize-js';
    styleSheet = document.getElementsByTagName('head')[0].appendChild(styleElement).sheet;
    styleSheet.deleteRule = styleSheet.deleteRule || styleSheet.removeRule;
    rules = styleSheet.cssRules || styleSheet.rules;
    // Add a new style block to the head ontaining the selectors and their associated declarations
    return function (styleObj) {
        // Init vars
        var styleString, selector, declarationBlock, declaration, exists, rule;
        // Loop styleObj selectors
        for (selector in styleObj) {
            if (styleObj.hasOwnProperty(selector)) {
                // Sets true if we are just updating an existing selector
                exists = false;
                for (rule in rules) {
                    if (rules.hasOwnProperty(rule)) {
                        // Condense comma seperated selectors to ensure match regardless of whitespace
                        if (rules[rule].selectorText && (rules[rule].selectorText.replace(/,\s*/g, ',') === selector.replace(/,\s*/g, ','))) {
                            exists = true;
                            // Loop through each declaration in the block and add it
                            declarationBlock = styleObj[selector];
                            if (declarationBlock) {
                                for (declaration in declarationBlock) {
                                    if (declarationBlock.hasOwnProperty(declaration)) {
                                        rules[rule].style[declaration] = declarationBlock[declaration];
                                    }
                                }
                            } else {
                                // Delete the rule if empty
                                styleSheet.deleteRule(rule);
                            }
                        }
                    }
                }
                // If the selector doesnt exist and there are declarations insert the rule
                if (!exists && styleObj[selector]) {
                    styleString = '';
                    declarationBlock = styleObj[selector];
                    for (declaration in declarationBlock) {
                        if (declarationBlock.hasOwnProperty(declaration)) {
                            if (declarationBlock[declaration] !== null && declarationBlock[declaration] !== undefined) {
                                // toString to account for any possible 0 attributes
                                styleString += declaration + ': ' + declarationBlock[declaration].toString().replace(/;/g, '') + ';';
                            }
                        }
                    }
                    styleSheet.addRule(selector, styleString, rules.length);
                }
            }
        }
    };
}());