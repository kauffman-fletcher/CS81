/**
 * Created by fletcher on 2017-07-02.
 */
/**
 Problem #2

 Modify the below code to print the numbers that have a reminder of 2 when divided by 3 for the number 0 - 50.
 Sample code below from Chapter 5 of Eloquent JavaScript Textbook.
 */

function unless(test, then) { // We're not using this function here, but I left it

    if (!test) then();

}

function when(test, then){
    if(test) then();
}

function repeat(times, body) {

    for (var i = 0; i < times; i++) body(i);

}

repeat(50, function(n) {

    when(n % 3==2, function() {

        console.log(""+n + " leaves 2 when divided by 3.");

    });

});