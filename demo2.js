//learning return type in function

function sub(a,b){
    return a-b
}
var c=(20,10)
console.log(c)

//learning if else stmt
// q1. is ie raining outside (if ansyes tk a umbrella if ans is no enjoy the sunshine)

var rain=true

if(rain){
    console.log("tk a umbrella")
}
else{
console.log("enjoy sunshine")
}
//q2 .did you finish ur homework (if ans yesgreat job if ans no finish ur h/w bfr playing

var homework=true
if(homework){
    console.log("Great Job!")
}
else{
    console.log("finish ur h/w bfr playing")
}
// q3. are  thr any cookies left (yes-- would u like a cookie no - time to bake no more cookies)
var cookie=false
if(cookie)
{
    console.log("would u like a cookie")
}
else{
    console.log("time to bake no more cookies")
}
// q4. did u brush ur teeth if yes- teeth are clean if no go brush ur teeth now
var brush=true
if (brush){
    console.log("teeth are clean!")
}
else{
    console.log("no go brush ur teeth now")
}
// q5. is yur bdy today is yes hbd no have a great day

var Birthday=true
if (Birthday){
    console.log("Happy Birthday!")
}
else{
    console.log("have a great day")
}
// if else exercise q1. what is the color of traffic light if annswe is red stop yellow -- get ready green -go 
var color="green"

if (color=="red"){
    console.log("stop")
}
if(color=="yellow")
    {
        console.log("get ready")
    }
    if (color=="green"){
        console.log("Go")
    }
    // if else q2 what is teh season of year(spring -enjoy the blooming flower  summer- have fun in the sun  autumn- admire the colorful leaves  winter- "Bundle up and stay warm 
    // ")

    var season= "winter"
    if(season=="spring"){
        console.log("enjoy the blooming flower")
    }
    if (season=="summer"){
        console.log("have fun in the sun")
    }
    if (season=="autumn"){
        console.log("admire the colorful leaves ")
    }
    if (season=="winter"){
        console.log("Bundle up and stay warm ")
    }
    // score if else excercise 
    var score = 100;
    if(score<=50){
        console.log("Ypu need to improve")
    }
    else if(score>50 && score<=70 ){
        console.log("Good job")
    }
    else if (score>70){
        console.log("Excellent Performance")
    }
    // if esle odd or even 
    var number = 4
    if (number%2==0){
        console.log("number is even")
    }
    else {
        console.log("number is odd")
    }
    // vowel or constant 
var character= "v"
if(character=="a" ||character=="e"|| character=="i" || character=="o"|| character=="u"){
    console.log("it is vowel ")
}
else {
    console.log("it is constoneant")
}
// for loop

var a="vidhya"
for(i=1;i<=5;i=i+1){
    console.log(a)
}
// print all the number 1 to 10 usg for loop

for (count=1; count<=10;count=count+1){
    console.log(count)
}
// print number from 1 to 10 but increment by 2 each step usng for loop
for (count=1; count<=10;count=count+2){
    console.log(count)
}
//print a number in reverse order from 1 to 10
for (count=11; count<=1;count=count+1){
    console.log(count)
}
// print a even number from 1 to 10
for (count=1; count<=10;count=count+1){
    if(count%2==0){
    console.log(count)}
} 
//print 2 tables
var i=0
for (i=1; i<=10;i=i+1){
    
    console.log(i+ "x2="+(i*2))}
