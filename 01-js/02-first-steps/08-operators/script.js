// the postfix and prefix forms
// What are the final values of all variable a, b, c and d after the code below?
function posPrefix() {
let a = 1; // 2 
let b = 1; // 2
let c = ++a; // 2
let d = b++; // 1

console.log(a, b, c, d);
}

// Assignment result
// what are the values of a and x after the below?
function assignment(){
let a = 2;
let x = 1 + (a *=2);

console.log(a, x);
}

// Type conversions
// What are results of theses expressions?
function typeConversions() {
    let a = "" + 1 + 0; // 10
    let b = "" - 1 + 0; // -1
    let c = true + false; // 1
    let d = 6 / "3"; // 2
    let e = "2" * "3"; // 6
    let f = 4 + 5 + "px"; // 9px
    let g = "$" + 4 + 5; // $45
    let h = "4" - 2; // 2
    let i = "4px" - 2; // NaN
    let j = " -9 " + 5; // -9 5
    let k = " -9 " - 5; // - 14
    let l = null + 1; // 1
    let m = undefined + 1; // NaN
    let n = " \t \n" - 2; // -2

    console.log(a, b, c, d, e, f, g, h, i, j, k, l, m, n);

}

// Fix the addition
// Here's a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.
function fixTheAddition() {
    let a = +prompt("First number?", 1);
    let b = +prompt("Second number?", 2);
    alert(a + b);
}

posPrefix();
assignment();
typeConversions();
fixTheAddition();