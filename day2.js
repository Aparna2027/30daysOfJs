//Activity1-arithmetic operator
//Task1 -addition
let num1=45;
let num2=9;
console.log("additionof ",num1," and ", num2 ,"is",num1+num2);//output->54

//Task2 substraction
console.log("substraction of ",num1," and ", num2 ,"is",num1-num2);//output->36
//Task 3
console.log("multiplication of ",num1," and ", num2 ,"is",num1*num2);//output->405
//Task 4
console.log("division of ",num1," and ", num2 ,"is",num1/num2);//output->5
//Task 5
console.log("remainder of ",num1," and ", num2 ,"is",num1%num2);//output->0
//Activity 2 -assignment operator
//Task 6
let x=18;
let y=9;
x+=y;
console.log(x);//output->27
//Task 7
x-=y;
console.log(x);//output->18
//Activity 3:comparison operator
//Task 8
let m=9;
let n=8;
console.log("is ",m ,"greater than ",n,":",m>n);//output->true
console.log("is ",m ,"lesser than ",n,":",m<n);//output->false
console.log("is ",n,"greater than ",m,":",n>m);//output->false
console.log("is ",n ,"lesser than ",m,":",n<m);//output->true
//Task 9
console.log("is ",m ,"greater than or equal to ",n,":",m>=n);//output->true
console.log("is ",m ,"lesser than or equal to",n,":",m<=n);//output->false
console.log("is ",m ,"greater than or equal to",n,":",n>=m);//output->false
console.log("is ",m ,"lesser than or equal to",n,":",n<=m);//output->true
//Task 10
let num =9;
let str="9";
console.log(num==str);//output->true
console.log(num===str);//output->false

//Activity 4:logical operator
//Task 11
let val=78;
if((val<=100) && (val>=70)){
    console.log(val," is between 70 and 100");
}
else if(val<=10 || (val%2==0))
{
    console.log("either ",val ,"is less than 10"," or divisible by 2");
}
if(val!=100)
{
    console.log(val ,"is not equal to 100");
}
//Activity 5:ternary operator
//Task 14 check positive/negative
let number=45;
(number>0)?console.log(number,"is positive"):console.log(number,"is negative");