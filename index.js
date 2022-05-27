var westlife = 140;
var timbaland = 20;
var queens = 240;
var michael=150;
var linkin=30;
var bruno=250;
var john=160;
var republic=40;
var redhot=260;

var band1="westlife";
var band2="timbaland";
var band3="queens";
var band4="michael";
var band5="linkin";
var band6="bruno";
var band7="john";
var band8="republic";
var band9="redhot";

var festday1= westlife + michael + john;
var festday2= timbaland + linkin + republic;
var festday3= queens + bruno + redhot;
var totalnodis= festday1 + festday2 + festday3;
var discount= (30/100)*totalnodis;
var finalresult=totalnodis - discount;

console.log("On the first day of the festival, i was lucky to watch " + band1 ," " + band4  ,"and " + band7 )
console.log("Then I watched " + band2, ", " + band5 ,"and " + band8 ,"and it cost me "+ festday2 + " in total that day." )
console.log("I was a bit tired on the third day but it was so much worth it to watch " + band3 ,", " + band6 ,"and " + band9 +" and i spent" ,festday1+festday2+festday3 +" for the three days of the festival.")


console.log("If I had booked the concert with enough time in advance, it would have cost me a total of " + finalresult + "and I would have saved " +discount + ".")