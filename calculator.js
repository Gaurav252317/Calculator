var count = 0;
var firstnum=0;
var secondnum=0;
var zero = document.getElementById('number0');
zero.addEventListener('click', function () {
    var zero1 = document.getElementById('showvalue');
    count = count * 10 + 0;
    zero1.innerHTML = count;

});
var one = document.getElementById('number1');
one.addEventListener('click', function () {
    var one1 = document.getElementById('showvalue');
    count = count * 10 + 1;
    one1.innerHTML = count;

});
var ac = document.getElementById('clear');
ac.addEventListener('click', function () {
    var ac1 = document.getElementById('showvalue');
    count = 0;
    ac1.innerHTML = count;

});

var two = document.getElementById('number2');
two.addEventListener('click', function () {
    var two1 = document.getElementById('showvalue');
    count = count * 10 + 2;
    two1.innerHTML = count;
});

var three = document.getElementById('number3');
three.addEventListener('click', function () {
    var three1 = document.getElementById('showvalue');
    count = count * 10 + 3;
    three1.innerHTML = count;
});

var four = document.getElementById('number4');
four.addEventListener('click', function () {
    var four1 = document.getElementById('showvalue');
    count = count * 10 + 4;
    four1.innerHTML = count;
});

var five = document.getElementById('number5');
five.addEventListener('click', function () {
    var five1 = document.getElementById('showvalue');
    count = count * 10 + 5;
    five1.innerHTML = count;
});

var six = document.getElementById('number6');
six.addEventListener('click', function () {
    var six1 = document.getElementById('showvalue');
    count = count * 10 + 6;
    six1.innerHTML = count;
});

var seven = document.getElementById('number7');
seven.addEventListener('click', function () {
    var seven1 = document.getElementById('showvalue');
    count = count * 10 + 7;
    seven1.innerHTML = count;
});

var eight = document.getElementById('number8');
eight.addEventListener('click', function () {
    var eight1 = document.getElementById('showvalue');
    count = count * 10 + 8;
    eight1.innerHTML = count;
});

var nine = document.getElementById('number9');
nine.addEventListener('click', function () {
    var nine1 = document.getElementById('showvalue');
    count = count * 10 + 9;
    nine1.innerHTML = count;
});

var add=document.getElementById('addition');
add.addEventListener('click',function(){
   firstnum=count;
   count=0;
   
});

