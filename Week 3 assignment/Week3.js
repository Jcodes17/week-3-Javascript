var ages = [3, 9,23, 64, 2, 8, 28, 93];

console.log (ages[ages.length -1] - ages[0]);

    ages.push(20);

 console.log (ages[ages.length -1] - ages[0]);



var avg = 0;

for (i=0; i < ages.length; i++) {
    avg = avg + ages[i];
}

console.log(avg/ages.length);

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var letters = 0;

for(i = 0; i < names.length; i++) {

    letters = letters + names[i].length;
}
    console.log(letters/names.length); 

var con = names[0];
for (i=1; i < names.length; i++) {

    con = con.concat(" ", names[i]);
}

console.log("names:", con);



var nameLengths =[];
for(i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}

var sum = 0;

for(i = 0; i < nameLengths.length; i++) {

    sum = sum + nameLengths[i];
}

console.log(sum);



function concat_n_times(word, n) {
    var con = word;
    for(i = 1; i <= n; i++);
    {
        con = con.concat(word);
    }

    return con;
}

console.log(concat_n_times("hello", 3));


function fullName(firstName, lastName) {

    return firstName.concat(" ", lastName)
}


console.log(fullName('Joey', 'Morgan'));

var arr = [5, 30, 56, 22, 11, 47,]
function number(arr) {
    sum = 0;
    for(i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }

    if(sum > 100) {
        return true;
    }

    else {
        return false;
    }
}

console.log(number(arr));





function avg(arr) {

    sum = 0;
    for (i = 0; i < arr.length; i++);

    {
    sum = sum + arr[i];
    }

    return (sum/arr.length)
}

function compAverage(arr1, arr2)

    {
    if(average(arr1) > average(arr2))

    {
        return true;
    }

    else

    {
        return false;
    }
    }

    var hotOutside = true;
    var moneyInPocket = 100.63;
    function willBuyDrink(isHotOutside, moneyInPocket)

    {
        if((isHotOutside) && (moneyInPocket > 10.50))

        {
            return true;
        }

        else

        {
            return false;
        }

    }

    console.log(willBuyDrink(hotOutside, moneyInPocket));



var foodTemp = true;
var chicken = 190                       // Set my variables
function eatFood(foodTemp, chicken){    // declared function eatFood
if((foodTemp) && (chicken > 180)) {     // set the if statement that if true I could eat the food
    return true;
}
    else {                                 // else if requirements are not met I can not eat the food
        return false;
    }
}

console.log(eatFood(foodTemp, chicken));    // check the console if statement is true



