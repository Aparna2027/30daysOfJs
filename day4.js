//Activity 1:For loop
//Task 1:print the numbers from 1 to 10 
let otp='';
for(let i=1;i<=10;i++)
{
    otp+=i;
   if(i<10)
   {
    otp+=',';
   }
}
console.log(otp);
//output->1,2,3,4,5,6,7,8,9,10
//Task2 :print multiplication of table 5
for(let i=1;i<=10;i++)
{
    console.log("5 * ",i,"=",5*i);
}
/*output->
5 *  1 = 5
5 *  2 = 10
5 *  3 = 15
5 *  4 = 20
5 *  5 = 25
5 *  6 = 30
5 *  7 = 35
5 *  8 = 40
5 *  9 = 45
5 *  10 = 50*/
//Activity 2:while loop
//Task 3:calculate sum of numbers from 1 to 10
let i=1;
let sum=0;
while(i<=10)
{
    sum+=i;
    i++;
}
console.log("sum of first 10 natural number is ",sum);
//output->sum of first 10 natural number is  55
//Task 4:print numbers from 10 to 1
let num=10;
while(num>0)
{
    console.log(num);
    num--;
}
/*output->
10
9
8
7
6
5
4
3
2
1*/

//Activity 3: do-while loop
//Task 5:print from 1 to 5 using do while
let x=1;
do{
    console.log(x);
    x++;
}while(x<=5);
/*output->
1
2
3
4
5*/

//Task 6:write program to find factorial of number
let number=5;
let fact=1;
let res=1;
do{
    res*=fact;
    fact++;
}while(fact<=number);
console.log("factorial of ",number ,"is :",res);
//output->factorial of  5 is : 120
//Activity 4:nested loop
//Task 7:print pattern 
for(let i=1;i<=5;i++)
{
    otp='';
    for(let j=1;j<=i;j++)
    {
        otp+='*';
    }
    console.log(otp);
}
/*output->
*
**
***
****
*****
*/
//Activity 5:loop control statement
//Task 8:print 1 to 10 but skip 5
for(let i=1;i<=10;i++)
{
    if(i===5){
        continue;
    }
    console.log(i);
}
/*output->
1
2
3
4
6
7
8
9
10*/
//Task 9:print number 1 to 10 but break when 7
for(let i=1;i<=10;i++)
{
    if(i===7)
    {
        break;
    }
    console.log(i);
}
/*output->1
2
3
4
5
6*/

