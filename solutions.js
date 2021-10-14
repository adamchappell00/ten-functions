"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue: COMPLETE Ln 23
 * isFalse: COMPLETE Ln 30
 * not: COMPLETE Ln 37
 * addOne: Complete Ln 40
 * isEven: Complete Ln 43
 * isIdentical: Complete Ln 50
 * isEqual: Complete Ln 57
 * or: Complete Ln 64
 * and: Complete Ln 67
 * concat: Complete Ln 70
 */
function isTrue(input) {
    if (input === true){
        return true;
    } else {
        return false;
    }
}
function isFalse(input) {
    if (input === false){
        return true;
    } else {
        return false;
    }
}
function not(input){
    return !input;
}
function addOne(number){
    return (parseFloat(number) + 1);
}
function isEven(number){
    var floatMe = parseFloat(number);
    if(floatMe % 2 === 0){
        return true;
    } else {
        return false;
    }
}
function isIdentical(a,b){
    if(a === b){
        return true;
    } else {
        return false;
    }
}
function isEqual(a,b){
    if(a == b){
        return true;
    } else {
        return false;
    }
}
function or(a,b){
    return a || b;
}
function and(a,b){
    return a && b;
}
function concat(a,b){
    return a.toString() + b.toString();
}