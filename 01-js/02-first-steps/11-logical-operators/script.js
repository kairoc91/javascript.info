/*
What's the result of OR?

What is the code below going to output?

alert( null || 2 || undefined );
*/
function resultOfOr() {
    console.log(null || 2 || undefined); // 2 - first truthy value
}

/*
What's the result of OR'ed alerts?

What will the code below output?

alert( alert(1) || 2 || alert(3) );
*/
function manyOr() {
    alert(alert(1) || 2 || alert(3)); // 1, after 2
}

/*
What is the result of AND?

What is this code going to show?

alert( 1 && null && 2 );
*/
function resultAnd() {
    alert(1 && null && 2); // null
}

/*
What is the result of AND'ed alerts?
importance: 3
What will this code show?

alert( alert(1) && alert(2) );
*/
function andAlerts() {
    alert(alert(1) && alert(2)); // 1 and undefined
}

/*
The result of OR AND OR

What will the result be?

alert( null || 2 && 3 || 4 );
*/
function orAndOr() {
    alert(null || 2 && 3 || 4);
}
/*
Check the range between

Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.

*/
function ageRange(age) {
    if (age >= 14 && age <= 90) {
        alert("Age is between 14 and 90.");
    } else {
        alert("Age range is not between 14 and 90.");
    }
}

/*
Check the range outside
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
*/
function ageRangeNot(age) {
    if (!(age >= 14 && !age <= 90)) {
        alert("Age range is not between 14 and 90.");
    } else {
        alert("Age is between 14 and 90.");
    }

    if (age >= 14 || !age <= 90) {
        alert("Age range is not between 14 and 90.");
    } else {
        alert("Age is between 14 and 90.");
    }
}
/*
A question about "if"
Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
*/
function questionIf() {
    console.log(Boolean(-1 || 0)); // -1 true
    console.log(Boolean(-1 && 0)); // 0 false
    console.log(Boolean(null || -1 && 1)); // 1 true
}

/*
Check the login
Write the code which asks for a login with prompt.
If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

The schema:
Please use nested if blocks. Mind the overall readability of the code.
Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
*/
function checkLogin() {
    let user = prompt("Enter username: ", "");

    if (user === "" || user === null) {
        alert("Canceled.");
    } else if (user === "Admin") {
        let password = prompt("Enter password: ", "");

        if (password == "TheMaster") {
            alert("Welcome!");
        } else if (password === null || password === "") {
            alert("Canceled.");
        } else {
            (!(password === "TheMaster"))
            alert("Wrong password.");
        }

    } else {
        alert("I don't know you.");

    }
}

checkLogin();