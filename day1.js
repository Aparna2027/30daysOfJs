//Activity 1
// Task 1 ->declare a variable using var
var x=7;
console.log(x);
//Task 2-> declare a variable using let
let name="madhav";
console.log(name);
//Activity 2
//Task 3-> declare a variable using const
const isBoolean=false;
console.log(isBoolean);
//Activity 3
//Task 4-> create variables of different data type and print it's type
var book="abcd";//string
const price=225;//number
const isAvailabel=true;//boolean
const arr=[1,"one",123,"xyz"];//array
const obj={book:"anything",price:400};//object
console.log(typeof(book));//output->string
console.log(typeof(price));//output->number
console.log(typeof(isAvailabel));//output->boolean
console.log(typeof(arr));//output->object
console.log(typeof(obj));//output->object
//Activity 4
//Task 5 reassingning variable using let
let str="hello";
console.log(str);//output->hello
str="hi";
console.log(str);//output->hi
//Activity 5
//Task 6-> reassing a variable declared using const
const num=100;
console.log(num);//output->100
// num=90;
// console.log(num);//TypeError:Assignment to constant variable
//Feature request
let id="abc1230"//string
let contactInfo={email:"abc12@mn.com"};
let mob=12396;
let isvalid=false;
const array=[1,3,4,"app"];
const obj2={model:"m3",name:"b6"}
console.log("id:",id,"type:",typeof(id));
//output->id: abc1230 type: string
console.log("contactInfo:",contactInfo,"type:",typeof(contactInfo));
//output->contactInfo: { email: 'abc12@mn.com' } type: object
console.log("ContactNo:",mob,"type:",typeof(mob));
//output->ContactNo: 12396 type: number
console.log("valid:",isvalid,"type:",typeof(isvalid));
//output->valid: false type: boolean
console.log("array:",array,"type:",typeof(array));
//output->array: [ 1, 3, 4, 'app' ] type: object
console.log("object:",obj2,"type:",typeof(obj2));
//output->object: { model: 'm3', name: 'b6' } type: object

//Reassignment Demo
//create a script to show const variable cann't be assigned but let can
let val="variable declared with let can be reassigned";
console.log(val);//output->variable declared with let can be reassigned
val="variable is  reassigned now";
console.log(val);//output->variable is  reassigned now
const check="variable declared with const cann't be reassigned";
console.log(check);//output->variable declared with const cann't be reassigned
check="variable can't be reassigned";
console.log(check);//output->TypeError: Assignment to constant variable.



