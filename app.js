// CHAPTER # 01

// question 1 
    alert("Hello visitors !")


// question 2 
    alert('Error! Please enter a valid password.')


// question 3
    alert('Welcome to JS Land... \n Happy Coding !');


// question 4
    alert('Welcome to JS Land')
    alert(' Happy Coding !  \n')

// question 5 

console.log ("Hello... I can run JS through my web browser's console")


// CHAPTER # 02 


// Question 1 
var username;

// Question 2
var myName = "Muhammad Owais";



// Question 3 

    var message = "Hello World";
    alert(message)



// Question 4 

    var name = "Owais";
    var age = 18;
    var course = "Web and Mobile Development ";
    var qualification = "Diploma Holder";

    alert("Name: "  +  name +   "\n"  +  "Age: " + age+  "\n"  +  "Course " + course  +  "\n"+ "Qualification: " + qualification);


// Question 5 

    alert("PIZZA \n PIZZ \n PIZ \n PI \n P\n");


// Question 6

    emailAddress = "muhammadowais25122003@gmail.com"
    alert("My Email Address is : " + emailAddress);



// Question 7

    var book = 'A smarter way to learn JavaScript'
    alert("I'm trying to learn from the book " + book);


// Question 8

    document.write("Yah! I can write HTML content through JavaScript)");


// Question 9

    var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(pattern);

// CHAPTER # 03 

// Question 1 
var age = "I am 18 years old";

alert (age)

// Question 2

var visit = "you have visited this website 14 times";

alert (visit)

// Question 3

var birthyear = "my birth year is";

var year = 2003;

document.write (birthyear + " " + year + "\n" + "data type of my declared variable is number <br/>");
// Question 4

var buyer = "Ali";
var product = "T-shirts";
var quantity = "5";

document.write (buyer + " " + "ordered" + " " + quantity + " " + product + " " + "on XYZ clothing store")

// CHAPTER # 04

// Question 1

alert (" Variable names can only contain NUMBERS , $ , _\n Variables must begin with a LETTER , $ , _\n Variable names are case SENSITIVE\n Variable names should not be JS KEYWORDS");

// CHAPTER # 05


// Question 1 

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write ("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " +"is"+ " " + sum  + "<br>");

// Question 2

var num1 = 3;
var num2 = 5;
var sub = num1 - num2;

document.write (" Subtraction of " + " " + num1 + " " + "and" + " " + num2 + " " +"is"+ " " + sub + "<br>");

var num1 = 3;
var num2 = 5;
var mul = num1 * num2;

document.write (" Multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " +"is"+ " " + mul  + "<br>");

var num1 = 3;
var num2 = 5;
var div = num1 / num2;

document.write (" Division of" + " " + num1 + " " + "and" + " " + num2 + " " +"is"+ " " + div  + "<br>"  + "<br>");

// Question 3


var value = " Value after declaration is undefined ";
var num = 5;
var initial = "Initial value is ";
var add = 7;
var addo = ++num +add;

document.write (value + "<br>");       
document.write (initial + --num  + "<br>");       
document.write ("Value after increment is" + ++num  + "<br>");
document.write ("Value after addition is" + addo  + "<br>");
document.write ("Value after decrement is " + --addo  + "<br>");
document.write ("Output : “The remainder is : 0"  + "<br>"  + "<br>");

// Question 4

var one_ticket_price = 600;
var quantity = 5;
var Total_cost = quantity * one_ticket_price;

document.write ("One Ticket Price = " + one_ticket_price + "<br>");
document.write ("quantity = " + quantity + "<br>"),
document.write ("Total cost to buy a " + quantity + " tickets is " + Total_cost + "<br>"  + "<br>");

// Question 5

var table = 4

for (i = 1 ; i <= 10 ; i++){
    console.log (table + " x " + i + " = " + table*i)
}

// Question 6

var Celsius = 25;
var fahrenheit = 70;

c = (fahrenheit - 32) * 5 / 9;
f = (Celsius * 9 / 5) + 32;

document.write(Celsius + "<sup>o</sup>C is " + f + "<sup>o</sup>C");
document.write("<br>");
document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");

// Question 7

var item_1_cost = 650;
var item_2_cost = 100;
var item_1_quantity = 3;
var item_2_quantity = 7;
var shipping_charges = 100;
var item_1 = item_1_cost * item_1_quantity;
var item_2 = item_2_cost * item_2_quantity;
var total_bill = item_1 + item_2 + shipping_charges;


document.write ("Item 1 cost = " + item_1_cost + "<br>");
document.write ("Item 2 cost = " + item_2_cost + "<br>");
document.write ("Item 1 quantity = " + item_1_quantity + "<br>");
document.write ("Item 2 quantity = " + item_2_quantity + "<br>");
document.write ("Shipping charges" + shipping_charges + "<br>");
document.write ("Total bill is " + total_bill + "<br>" + "<br>");

// Question 8

var total_marks = 980;
var obtained_marks = 804;
var percentage = obtained_marks / total_marks * 100;

document.write ("Total marks = " + total_marks + "<br>");
document.write ("Obtained marks = " + obtained_marks + "<br>");
document.write ("Percentage = " + percentage + "<br>" + "<br>");

// Question 9

var one_riyal = 28;
var one_dollar = 104.80;
var dollar_v_have = 10;
var riyal_v_have = 25;
var dollor_amount = one_dollar * dollar_v_have;
var riyal_amount = one_riyal * riyal_v_have;
var paki_rs = dollor_amount + riyal_amount;

document.write ("Total currency in PKR is " + paki_rs + "<br>" + "<br>");

// Question 10

var my = 100;

document.write (my + 20 + "<br>");

my = 120;

document.write (my * 2 + "<br>");

my = 240;

document.write (my / 3 + "<br>" + "<br>");

// Question 11

var current_year = 2022;
var birth_year = 2003;
var age = current_year - birth_year;

document.write ("Current year " + current_year + "<br>");
document.write ("Birth year " + birth_year + "<br>");
document.write ("Age = " + age + "<br>" + "<br>");

// Question 12

var radius = 20;
var pi = 3.142;
var cf = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write('Radius of Circle is : ' + radius);
document.write("<br>");
document.write('The Circumference of Circle is : ' + cf);
document.write("<br>");
document.write('The Area of Circle is : ' + pi);

// Question 13

var favsnack = "TUC";
var currentAge = 24;
var maxAge = 65;
var snankPerDay = 2;
var snankPerDay = 2;
var ageCalculate = maxAge - currentAge;
var totalSnaks = ageCalculate * snankPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>");
document.write("Favorite Snack:  " + favsnack);
document.write("<br>");
document.write("Current Age: " + currentAge);
document.write("<br>");
document.write("Estimated Maximum Age:  " + maxAge);
document.write("<br>");
document.write("Amount of Snacks per day:  " + snankPerDay);
document.write("<br>");
document.write("You will need " + totalSnaks + " " + favsnack + " to last you untill the ripe old age of " + maxAge);

// CHAPTER # 06-09


// Question 1

var num = 10;
var newnum = ++num;
document.write (newnum + "<br>");

var num = 11;
var newnum = ++num;
document.write (newnum + "<br>");

var num = 11;
var newnum = num--;
document.write (newnum + "<br>");

var num = 11;
var newnum = --num;
document.write (newnum + "<br>");

// Question 2

var new_num = 10;

document.write ("the value of a is " + new_num + "<br>");

var new_num = ++new_num;
document.write ("now the value of a is " + new_num + "<br>");

var new_num = ++new_num;
document.write ("now the value of a is " + new_num + "<br>");

var new_num = --new_num;
document.write ("now the value of a is " + new_num + "<br>");

var new_num = --new_num;
document.write ("now the value of a is " + new_num + "<br>");

// Question 3

var username = prompt ("what's your good name");
alert ("Welcome ! " + username);

var age = +prompt ("What's your age");
var newage = age + 2;
alert ("Your age is " + newage);


// Question 4
var table = +prompt("Enter your number to see table")

for (i = 1 ; i <= 10 ; i++){
    console.log (table + " x " + i + " = " + table*i)
}

// Question 5

var f_sub = prompt ("Enter your first subject");
var f_obt = +prompt ("Obatained marks of "+ f_sub);
var s_sub = prompt ("Enter your second  subject");
var s_obt = +prompt ("Obatained marks of "+ s_sub);
var t_sub = prompt ("Enter your third subject");
var t_obt = +prompt ("Obatained marks of "+ t_sub);
var total = 100;
var f_per = f_obt / total * 100;
var s_per = s_obt / total * 100;
var t_per = t_obt / total * 100;

document.write ("<b>" + f_sub + "</b>" + " " + f_obt + "/" + total + " " + "= " + f_per + "%" + "<br>");
document.write ("<b>" + s_sub + "</b>" + " " + s_obt + "/" + total + " " + "= " + s_per + "%" + "<br>");
document.write ("<b>" + t_sub + "</b>" + " " + t_obt + "/" + total + " " + "= " + t_per + "%" + "<br>");

// CHAPTER # 10-11

// Question 1

var city = prompt ("Enter your city")
if (city === "karachi"){
    alert ("Welcome to city of lights")
}

// Question 2

var gender = prompt ("what's your gender..??")
if (gender === "male") {
    alert ("Good morning sir")
}
if (gender === "female") {
    alert ("Good morning maam")
}

// Question 3

var traffic = prompt ("Enter Signal Color")
if (traffic === "red") {
    alert ("Must stop")
}
if (traffic === "green") {
    alert ("Move now")
}
if (traffic === "yellow") {
    alert ("Ready to move")
}

// Question 4

var fuel = prompt("How many litre' of fuel are remaining..?")
if (fuel <= 0.25){
    alert ("Please refill the fuel in your car")
}

// Question 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} 

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert ("True")
}
if (false){
    alert ("True")
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

// Question 6


var total_marks = +prompt ("Enter your total marks..")
var obt_marks = +prompt ("Enter your obtained marks..")
var Percent = (obt_marks / total_marks * 100)

document.write ("<h1>" + "MARK SHEET" + "</h1>" + "</br>");
document.write ("<b>" + "Total Marks " + "</b>" + "= " + total_marks + "</br>");
document.write ("<b>" + "Obatained Marks " + "</b>" + "= " + obt_marks +"</br>");
document.write ("<b>" + "Percentage " + "</b>" + "= " + Percent + "</br>")

if (Percent >= 80) {
    document.write ("<b>" + "Grade " + "</b>" + "= " + "A+" + "</br>");
}
else if (Percent >= 70) {
    document.write ("<b>" + "Grade " + "</b>" + "= " + "A" + "</br>");
}
else if (Percent >= 60) {
    document.write ("<b>" + "Grade " + "</b>" + "= " + "B" + "</br>");
}
else if (Percent < 60) {
    document.write ("<b>" + "Grade " + "</b>" + "= " + "Fail" + "</br>");
}
if (Percent >= 80){
document.write ("<b>" + "Remarks " + "</b>" + "= " + "Exellant"+ "</br>")
}
else if (Percent >= 70){
document.write ("<b>" + "Remarks " + "</b>" + "= " + "Good" + "</br>")
}
else if (Percent >= 60){
document.write ("<b>" + "Remarks " + "</b>" + "= " + "You need to improve" + "</br>")
}
else if (Percent < 60){
document.write ("<b>" + "Remarks " + "</b>" + "= " + "Sorry" + "</br>")
}

// Question 7

var guess = 6
var guess_no = +prompt("Guess the No")

if (guess_no === guess) {
    alert("BINGO")
}
if (guess_no === ++guess) {
    alert("“Close enough to the correct answer”.")
}

// Question 8

var number = +prompt("Enter a number : ");
if (number % 3 == 0) {
     alert('divisible by 3')
} else {
     alert("not divisible by 3")
}

// Question 9

var number = +prompt("Enter a number : ");
if (number % 2 == 0) {
        alert('Even Number')
} else {
        alert("Odd Number")
}

// Question 10

var temprature = +prompt ("Enter's a degree")

if (temprature >= 40){
    alert ("“It is too hot outside.”")
}
 else if (temprature >= 30){
    alert ("“The Weather today is Normal.”")
}
else if (temprature >= 20){
    alert ("“The Weather is cool.”")
}
else if (temprature >= 10){
    alert ("“OMG! Today weather is so Cool.”")
}

// Question 11 

var num1 = +prompt ("Enter Your First Num")
var opt = prompt ("Enter Your opt")
var num2 = +prompt ("Enter Your Last Num")

if (opt === "+") {
console.log (num1 + num2)
alert (num1 + num2)
}
if (opt === "/") {
console.log (num1 / num2)
alert (num1 + num2)
}
if (opt === "*") {
console.log (num1 * num2)
alert (num1 + num2)
}
if (opt === "-") {
console.log (num1 - num2)
alert (num1 + num2)
}
if (opt === "%") {
console.log (num1 % num2)
alert (num1 + num2)
}

// CHAPTER # 12-13

// Question 1

var integer = prompt("Enter a character like a-z , A-Z , 0-9")

if (integer === "A" || integer === "B" || integer === "C" || integer === "D" || integer === "E" || integer === "F" || integer === "G" || integer === "H" || integer === "I" || integer === "J" || integer === "K" || integer === "L" || integer === "M" || integer === "N" || integer === "O" || integer === "P" || integer === "Q" || integer === "R" || integer === "S" || integer === "T" || integer === "U" || integer === "V" || integer === "W" || integer === "X" || integer === "Y" || integer === "Z") {
    alert("This is a Uppercase letter")
}
else if  (integer === "a" || integer === "b" || integer === "c" || integer === "d" || integer === "e" || integer === "f" || integer === "g" || integer === "h" || integer === "i" || integer === "j" || integer === "k" || integer === "l" || integer === "m" || integer === "n" || integer === "o" || integer === "p" || integer === "q" || integer === "r" || integer === "s" || integer === "t" || integer === "u" || integer === "v" || integer === "w" || integer === "x" || integer === "y" || integer === "z") {
    alert("This is a Lowercase letter");
}
else {
    alert ("This is a number")
}

// Question 2

var val1 = +prompt("Write a first Number ")
var val2 = +prompt("Write a second Number ")

if (val1 > val2){
    alert (num1 + " is greater then " + num2)
}
else if (val1 < val2){
    alert (num1 + " is less then " + num2)
}
else {
    alert ("Both values are equal")
}

// Question 3

var num1 = +prompt ("Enter a number")

if (num1 > 0){
    alert ("This is a positive number")
}
else if (num1 < 0){
    alert ("This is a negative number")
} else {
    alert ("This is zero")
}

// Question 4

var integer = prompt("Enter a character like a-z , A-Z")

if ( integer === "B" || integer === "C" || integer === "D" ||  integer === "F" || integer === "G" || integer === "H" || integer === "J" || integer === "K" || integer === "L" || integer === "M" || integer === "N" || integer === "P" || integer === "Q" || integer === "R" || integer === "S" || integer === "T" || integer === "V" || integer === "W" || integer === "X" || integer === "Y" || integer === "Z" || integer === "b" || integer === "c" || integer === "d"  || integer === "f" || integer === "g" || integer === "h"  || integer === "j" || integer === "k" || integer === "l" || integer === "m" || integer === "n" || integer === "p" || integer === "q" || integer === "r" || integer === "s" || integer === "t" || integer === "v" || integer === "w" || integer === "x" || integer === "y" || integer === "z"){
    alert (" This is not a vowel")
} else {
    alert ("This is a vowel")
}

// Question 5

var password = +prompt ("Enter a password")
var c_password = +prompt ("Enter a confirm password")

if (password === c_password){
    alert ("Password created")
}
else if (password !== c_password){
    alert ("password is wrong")
}

// Question 6

var hour = 13;
if (hour < 18) {
    alert("Good day");
}
else {
    alert("Good evening");
}

// Question 7

var time = +prompt("Enter a time in 24 hour clock format like 0-24")

if (time === 00){
    alert ("this time is equal to 12 am")
}
else if (time === 01){
    alert ("this time is equal to 1 am")
}
else if (time === 02){
    alert ("this time is equal to 2 am")
}
else if (time === 03){
    alert ("this time is equal to 3 am")
}
else if (time === 04){
    alert ("this time is equal to 4 am")
}
else if (time === 05){
    alert ("this time is equal to 5 am")
}
else if (time === 06){
    alert ("this time is equal to 6 am")
}
else if (time === 07){
    alert ("this time is equal to 7 am")
}
else if (time === 08){
    alert ("this time is equal to 8 am")
}
else if (time === 09){
    alert ("this time is equal to 9 am")
}
else if (time === 10){
    alert ("this time is equal to 10 am")
}
else if (time === 11){
    alert ("this time is equal to 11 am")
}
else if (time === 12){
    alert ("this time is equal to 12 am")
}
else if (time === 13){
    alert ("this time is equal to 1 pm")
}
else if (time === 14){
    alert ("this time is equal to 2 pm")
}
else if (time === 15){
    alert ("this time is equal to 3 pm")
}
else if (time === 16){
    alert ("this time is equal to 4 pm")
}
else if (time === 17){
    alert ("this time is equal to 5 pm")
}
else if (time === 18){
    alert ("this time is equal to 6 pm")
}
else if (time === 19){
    alert ("this time is equal to 7 pm")
}
else if (time === 20){
    alert ("this time is equal to 8 pm")
}
else if (time === 21){
    alert ("this time is equal to 9 pm")
}
else if (time === 22){
    alert ("this time is equal to 10 pm")
}
else if (time === 23){
    alert ("this time is equal to 11 pm")
}
else if (time === 24){
    alert ("this time is equal to 12 pm")
}
else {
alert ("Invalid value")
}

// CHAPTER # 14-16

// Question 1 - 6

var name = prompt ("Enter your name")

var students = [name];

alert ("Welcome " + students)

var cities = ["karachi" , "lahore" , "islamabad"]

alert ("Welcome " + cities[0])

var numbers = [1 , 2 , 3 , 4 , 5]

alert (numbers[2])

var bool = ["true" , "false"]

alert (bool[1])

var mix = ["owais" , "ali" ,"true",  3 , 5 ,]
alert (mix[1]);
alert (mix[2]);
alert (mix[4]);

// Question 7

document.write ("<h1>" + "Qualification" + "</h1>")
var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM" , "MS" , "M. Phil" , "PhD"]
document.write ("<h3>" + Qualification[0] + "</h3>")
document.write ("<h3>" + Qualification[1] + "</h3>")
document.write ("<h3>" + Qualification[2] + "</h3>")
document.write ("<h3>" + Qualification[3] + "</h3>")
document.write ("<h3>" + Qualification[4] + "</h3>")
document.write ("<h3>" + Qualification[5] + "</h3>")
document.write ("<h3>" + Qualification[6] + "</h3>")
document.write ("<h3>" + Qualification[7] + "</h3>")

// Question 8

var student_name = ["Ali" , "Owais" , "Bilal"]
var scores= [320 , 230 , 480]
var per = [scores[0] / 500 * 100 , scores[1] / 500 * 100 , scores[2] / 500 * 100]

document.write ("<h2>" + " Score of " + student_name[0] + " is " + scores[0] + " Percentage is " + per[0] + "%" + "</h2>")
document.write ("<h2>" + " Score of " + student_name[1] + " is " + scores[1] + " Percentage is " + per[1] + "%" + "</h2>")
document.write ("<h2>" + " Score of " + student_name[2] + " is " + scores[2] + " Percentage is " + per[2] + "%" + "</h2>")

// Question 9

var colors = ["gray " , " purple " , " white"]
var F_color = prompt("Enter the color you want to add the first")
colors.unshift (F_color)
alert (colors);
var l_color = prompt("Enter the color you want to add the last")
colors.push (l_color)
alert (colors);
var F_two_color = prompt("Enter the two color you want to add the first")
colors.unshift (F_two_color)
alert (colors);
colors.shift ();
alert (colors);
colors.pop ();
alert (colors);
var color = prompt("Enter the color which you want to add in your given index no.")
var index = +prompt("Enter the index no. where you want to add the color")
colors.splice (index , 0, color);
alert (colors); 
var index_no = +prompt("Enter the index no. where you want to del the color")
colors.splice (index_no , 1);
alert (colors); 

// Question 10

    var studentScores = [67, 87, 98, 97, 67, 80, 90];
    document.write("Scores of Students :  " + studentScores);

    document.write("<br>")

    var sortedScores = studentScores.sort()
    document.write("Ordered Scores of Students :  " + studentScores);

// Question 11
var cities = ["karachi" , "lahore" , "islamabad" , "Quetta" , "Peshawer"]
var selected_cities = [cities[2] , cities[0]]

alert (selected_cities)

// Question 12

var arr = ["This", "is", "my", "cat"];
var joined = arr.join(" ");
document.write (joined)

// Question 13

var devices = ["keyboard " , " mouse " , " printer " , " monitor"]
document.write ("<h1>" + "Devices" +"</h1>")
document.write ("<h2>" + devices +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[0] +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[1] +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[2] +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[3] +"</h2>")

// Question 14

var devices = ["keyboard " , " mouse " , " printer " , " monitor"]
document.write ("<h1>" + "Devices" +"</h1>")
document.write ("<h2>" + devices +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[3] +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[2] +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[1] +"</h2>")
document.write ("<h1>" + "Out" +"</h1>")
document.write ("<h2>" + devices[0] +"</h2>")

// Question 15

var mob_devices = ["Apple " , " Motorolla " , " Nokia " , " Samsung"]

document.write ("<select>" + "<option>" + mob_devices[0]+ "</option> " + "<option>" + mob_devices[1] +"</option>" + "<option>" + mob_devices[2] +"</option>" + "<option>" + mob_devices[3] +"</option>" +"</select>" )

// CHAPTER # 17 - 20

// Question 1

var arr = [["karachi", "quetta"], ["lahore", "quetta"]]

console.log(arr[0][0]);

// Question 2

var multi = [[0, 1], [2, 3]]

console.log(multi[0][0], multi[0][1], multi[1][0], multi[1][1]);
console.log(multi[0][1], multi[0][0], multi[1][0], multi[0][1]);
console.log(multi[1][0], multi[0][1], multi[0][0], multi[0][1]);

// Question 3

for (counting = 1; counting <= 10; counting++) {
    document.write(counting + "</br>")
}

// Question 4

var user = +prompt("Enter your Number")
var How_many_time = +prompt("How many time you want to multiply")

for (var i = 1; i <= How_many_time; i++) {
    document.write(user + " x " + i + " = " + user * i + "<br/>")
}

// Question 5

var fruits = ["Banana", "Apple", "Mango", "Stawberry", "orange"]

for (i = 0; i < fruits.length; i++) {
    document.write("Element at index " + [i] + " is " + fruits[i] + "</br>")
}

// Question 6

for (i = 0; i <= 15; i++) {
    document.write(i + " , ")
}
document.write("</br>")
for (let index = 10; index >= 1; index--) {
    document.write(index + " " + "," + " ")
}

for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        document.write(i + ",")
    }
}
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k" + ",")
    }
}

for(var i = 0 ; i < 20; i++){
    i++
    document.write (i + " " + "," + " ")
} 

// Question 7

var items = ["cake", "applepie", "cookie", "chips", "patties"]
var input = prompt("Enter your item")
var flag = "no";

for (var i = 0; i < items.length; i++) {
    if (items[i] === input) {
        flag = "yes";
        break;
    }
}

if (flag === "yes") {
    alert("This item is availibel at index " + [i])
} else {
    alert("This item is not availibele")
}

// Question 8

var A = [24, 53, 78, 91, 12]
var max = 0

for (var i = 0; i < A.length; i++) {
    if (max < A[i]) {
        max = A[i];
    }
}

console.log(max)

// Question 9

var a = [24, 53, 78, 91, 12]
var min = 0

console.log(min)
for (i = 0; i < a.length; i++) {
    if (i < a[i]) {
        min = a[i];
    }
}

// Question 10

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + ",")
    }
}

// CHAPTER # 21 - 25

// Question 1

var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")

var full_name = (first_name + " " +last_name)
alert ("hello" + full_name)

// Question 2

var mob = prompt("Enter Your Favrt Mobile")
document.write ("Your input " + "( " + mob + ")" + " length  is " + mob.length + "<br>")

// Question 3

var country = "pakistani"

document.write ("String : pakistani" + "<br>")
document.write ("Index of 'n' : " + country.indexOf("n") + "<br>")

// Question 4

var greet = "Hello World"

document.write ("String : Hello World" + "<br>")
document.write ("Index of 'l' : " + greet.lastIndexOf("l") + "<br>")

// Question 5

var country = "pakistani"

document.write ("String : pakistani" + "<br>")
document.write ("Index of 'i' : " + country.indexOf("i") + "<br>")

// Question 6

var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")

var full_name = (first_name + " " +last_name)
alert ("hello" + full_name)

// Question 7

var city = "Hyderabad"
var city =city.replace(city, "Islamabad")


document.write("City : Hyderabad" + "<br>")
document.write ("After replacement : " + city + "<br>")

// Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/ and /g," & ")

document.write (message + "<br>")

// Question 9

var stringNumber = "472";
var numberToString = +stringNumber;

document.write("Value : " + stringNumber + "<br>" + "Type :  " + typeof (stringNumber) + "<br>");
document.write("Value : " + numberToString + "<br>" + "Type :  " + typeof (numberToString));

// Question 10

var input1 = prompt("Enter Your Word")
input1 = input1.toUpperCase()
document.write (input1 + "<br>")

// Question 11

var input2 = prompt("Enter Your Word")
input2 = input2.toLowerCase()
document.write (input2 + "<br>")

// Question 12

var dec = ("35.36")
var decs = dec.replace(dec , 3536)

document.write ("Number : " + dec + "<br>")
document.write ("Result : " + decs + "<br>")

// Question 13

var user = prompt("Enter your username")
var symbols = ["@" , "." , "," , "!"]
for (i = 0 ; i < user.length ; i++){
   if (user[i] === "@" || user[i] === "." || user === "!" || user[i] === ","){ 
       alert ("Your User Name Is Not Valid")
}
}

// Question 14

var input = prompt("What do you want to eat..?")
var desi = ["-","biryani", "pulao", "nihari", "qorma", "karahi", "burger", "pizza", "daal", "shawarma", "fish","won-ton" ,"pasta", "chaat","falooda" ,"gol gappe", "shami kabab", "chapli kabab", "tikka", "broast", "roll", "nuggets", "fries", "soup", "cold drink ", "salad ", "raita", "tea", "coffee","ice-cream","shakes"]
input = input.toLowerCase();
var flag = false
for (i = 0 ; i < desi.length ; i++){
    if (input === desi[i]){
        alert (input + " is availible at index " + i)
        flag = true
    }
}  
if (flag === false){
    alert (input + " is not availible")
}

// Question 16

var university = ("University of Karachi");

var new_uni = university.split('')

for (i = 0 ; i < new_uni.length ; i++)
document.write (new_uni[i] + "<br>")

// Question 17

var word = prompt("Enter your word") 
var last_word = (word.length)-1 

document.write (word[last_word])

// Question 18

var the = ("The quick brown fox jumps over the lazy dog")
the = the.toLowerCase()
var find = "the"
var splited = the.split(" ")
var count = 0

for (i = 0 ; i < splited.length ; i++){
if ( find === splited[i])    
count++
}
console.log (count)

document.write ("Text : " + the + "</br>")
document.write ("There are " + count + " occuances of 'the'")


// CHAPTER # 26 - 30

// Question 1

var positive = +prompt("Enter Positive Decimal Number")

var number = (positive)
var round = Math.round(positive)
var floor = Math.floor(positive)
var ceil = Math.ceil(positive)

document.write ("<b>" + "Number" + "</b>" + " = " + number + "<br>")
document.write ("<b>" + "Round" + "</b>" + " = " + round + "<br>")
document.write ("<b>" + "Floor" + "</b>" + " = " + floor + "<br>")
document.write ("<b>" + "Ciel" + "</b>" + " = " + ceil + "<br>" + "<br>")

// // Question 2

var negative = +prompt("Enter negative Decimal Number")

var number = (negative)
var round = Math.round(negative)
var floor = Math.floor(negative)
var ceil = Math.ceil(negative)

document.write ("<b>" + "Number" + "</b>" + " = " + number + "<br>")
document.write ("<b>" + "Round" + "</b>" + " = " + round + "<br>")
document.write ("<b>" + "Floor" + "</b>" + " = " + floor + "<br>")
document.write ("<b>" + "Ciel" + "</b>" + " = " + ceil + "<br>" + "<br>")

// // Question 3



// // Question 4

var dice = Math.random()
var dic = (dice * 6) + 1
var stars = Math.floor(dic)
alert ("Guess What Is Coming From Dice")
alert (stars)

// // Question 5

var choice = prompt(name + " select heads or tails or H/T")
var choice = choice.toLowerCase()
var num = Math.random()
var num2 = Math.round(num)

if (choice === "h" || choice === "heads") {
    if (num2 === 0) {
        alert("Its heads..You Win")
    } else {
        alert("Its tails..You Lose")
    }
}
else if (choice === "t" || choice === "tails") {
    if (num2 === 1) {
        alert("Its tails..You Win")
    } else {
        alert("Its heads..You Lose")
    }
} else {
    alert("Invalid value")
}

// Question 6

var hundred = Math.random()
var whole = Math.floor(hundred * 100 ) + 1

alert ("Random Number Between 1 and 100 is " + whole)

// Question 7

var weight = prompt("Enter Your Weight")
weight = parseFloat(weight)
alert ("Your Weight is " + weight + " Kilograms")

// Question 8

var secret = Math.random()
var sec = (secret * 10) + 1
var dots = Math.floor(sec)
alert ("Guess What Is Coming From 1 - 10")
var guess_secret = +prompt ("Enter Number")
if (guess_secret === dots){
    alert ("You Win")
} else {
    alert ("You loose,Try Again")
}

// // CHAPTER # 31-34

// //Question 1

var date = new Date();
document.write (date + "<br>")

// Question 2

var monthNames = ["January", "February", "March", "April", "May", "June", "July" ,"August" ,"September" ,"Octuber","November", "December"];
var date = new Date();
var month = date.getMonth();
var nowmonth = monthNames[month]

document.write (nowmonth + "<br>")

// Question 3

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
var day =date.getDay()
var nowday = dayNames[day]
document.write (nowday + "<br>") 

// Question 4

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
var day =date.getDay()

var nowday = dayNames[day]
if(nowday === dayNames[0,6]){
    alert("Its Fun Day")
} else{
    alert ("Its Not Fun Day")
}

// Question 5

var date = new Date();
var day =date.getDate()

if (day < 16){
    alert ("First fifteen days of the month")
} else {
alert ("Last days of the month")
}

// Question 6

var date = new Date();
document.write ("Current Date = " + date + "</br>")
var milisec = date.getTime()
document.write("Elapsed miliseconds since 1st January 1970 = " + milisec+ "</br>")
var mints = milisec / 1000 / 60 
var minutes =Math.floor(mints)
document.write("Elapsed miliseconds since 1st January 1970 = " + minutes + "</br>")

// Question 7

var ampm = new Date().getHours()
if (ampm <= 12 ){
    alert ("its am")
} else {
    alert ("its pm")
}

// Question 8

var date = new Date();
date.setFullYear(2030)
document.write("Later Date = " + date + "<br>")

// Question 9

var date = new Date().getTime()
var June = new Date("18 june 2015").getTime();
var diff = (date - June)
var days = diff / (1000 * 60 * 60 * 24)
var passed = Math.floor(days)
document.write (passed + " days have passed since 1st ramazan 2015" + "<br>")

// Question 10

var date = new Date("1 january 2015")
var currentdate = new Date()
var jan = date.getTime()
var now = currentdate.getTime()
var diff = (now - jan)
var secs = diff / (1000)
var sec = Math.floor(secs)
document.write ("On reference date " + currentdate + "<br>")
document.write (sec + " have passed since the beginnig of 2015" + "<br>")

// Question 11

var date = new Date("jan 7, 2020 12:12:12")
document.write("current date = " + date + "<br>")

var oneHourago = new Date("jan 7, 2020 11:12:12")
document.write("one hour ago time was = " + oneHourago + "<br>")


// Question 12

var date = new Date();
var passedhour = new Date();
passedhour.setFullYear(1022)
document.write ("Current date = " + date + "<br>")
document.write ("100 years ago,It was " + passedhour + "<br>")

// Question 13

var birthdaydate = prompt ("Enter Your Birthday")
var date = new Date().getTime();
var birth = new Date(birthdaydate).getTime();
var diff = (date - birth)
var year = diff / (1000 * 60 * 60 * 24 * 365)
year= Math.ceil(year)
document.write ("Your birhday is "+ birthdaydate + "<br>")
document.write ("Your age is "+ year + "<br>")

// Question 14

var name = prompt("Enter Your Name")
var monthNames = ["January", "February", "March", "April", "May", "June", "July" ,"August" ,"September" ,"Octuber","November", "December"];
var date = new Date();
var month = date.getMonth();
var nowmonth = monthNames[month]
var unitsused = +prompt("How many units you used")
var Chargeperunit = 16
var billindate = (unitsused * Chargeperunit)
var roundedbill = Math.round(billindate)
var late = 350
var billafterdate = (billindate + late)
var roundbill = Math.round(billafterdate)
document.write ("Name = " + name + "<br>")
document.write ("Month = " + nowmonth + "<br>")
document.write ("Number of Units = " + unitsused + "<br>")
document.write ("Charges per unit = " +  Chargeperunit + "<br>")
document.write ("Net Amount Payable (within Due Date) = " + roundedbill + "<br>")
document.write ("Late Payment Surcharge = " + late + "<br>")
document.write ("Gross Amount Payable (after Due Date) = " + roundbill + "<br>")

// CHAPTER # 35-38

// Question 1

function date() {
   document.write(new Date() + "</br>")
}

date()

// // Question 2

function fullname (){
   var first = prompt("Enter Your last Name")
   var last = prompt("Enter Your First Name")
    document.write(first + " " + last + "</br>" )
}

fullname()

// //Question 3

var firstnum = +prompt("Enter Your First Number")
var lastnum = +prompt("Enter Your Last Number")

function sum (){
    document.write((firstnum + lastnum) + "</br>" )
}

sum()

// Question 4


function Calculator() {
var firstnum = +prompt("Enter Your First Number")
var opt = prompt("Enter Your Operater")
var lastnum = +prompt("Enter Your last Number")

   if (opt === "+") {
      document.write(firstnum + lastnum + "<br>")
   } else if (opt === "-") {
      document.write(firstnum - lastnum + "<br>")
   } else if (opt === "*") {
      document.write(firstnum * lastnum + "<br>")
   } else if (opt === "/") {
      document.write(firstnum / lastnum + "<br>")
   } else {
      alert ("Invalid Request")
   }
}
Calculator()

// Question 5

function square(){
   var num = +prompt("Enter a Number To Find a Square")
   document.write ("The Square of "+ num + " is " + num * num + "<br>")
}

square()

// Question 6



// Question 7
var start = +prompt("Enter a Number where you want to start a counting")
var end = +prompt("Enter a Number where you want to end a counting")

function starting (){
    for (i = start ; i <= end ; i++){
document.write (i + "</br>")
    }
}

starting()

// Question 8



// Question 9

function area() {
   var widht = +prompt("Enter the widht of triangle")
   var height = +prompt("Enter the height of triangle")
   var area = (widht * height)
   document.write("The Area of Triangle is " + area + "<br>")
   var a = 32 * 43
   document.write("The Area of Triangle is " + a + "<br>")
}

area()

// Question 10

function palendrome(){
    var input = prompt("Enter a word")
    var input2 = input.split("").reverse().join("")
    
    if (input === input2){
        alert("its a palendrome")
    }else {
        alert("its not a palendrome")

    }
}

palendrome()

// Question 11

function cap() {
    var word = prompt("Enter").toLowerCase()
    var word = word.split(" ")
    for (i = 0; i < word.length; i++) {
        var capital = word[i].charAt(0).toUpperCase()
        var remain = word[i].slice(1)
        document.write  (capital + remain + " ");
    }
}

cap()

// Question 12

function longestWord(str){

    var str = prompt("Enter your string : ")
    var splitArray= str.split(' ');
    
    var storeWord = "";
    
    for (var i = 0; i < splitArray.length; i++) {
           if (splitArray[i].length > storeWord.length) {
            storeWord = splitArray[i];
        }
    }
        document.write("String is : " + str + "<br>")
        document.write("Longest word in String is : " + storeWord)
    }

    longestWord()

// Question 13 

function occurance(){
    var input = prompt("Enter Your string")
    var character = prompt("Enter your character")
    var count = 0
for (var i = 0 ; i < input.length ;i++){
    if (input.charAt(i)=== character)
    count++
}
document.write ("Your character (" + character + ") is " + count + " apperance" + "<br>")
}

occurance()
