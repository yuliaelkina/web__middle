// number  -  числа
// string  - строки
// bool  - true/false
// object  - объект
// function  -  функция
// undefined  -  не определено

var name = "Юлия";
console.log(name);
name = "Виктор";
console.log(name);

///

var a = "15";
var b = "30";
if (a<b) {
  console.log("Я люблю JavaScript")
} else {console.log("Выражение неверно")};
b = 10;

if (a<b) {
  console.log("Я люблю JavaScript")
} else {console.log("Выражение неверно")};


///

for (i=0; i<10; i++) {
console.log(i);};

///

function sum(a1,a2,a3) {return(a1+a2+a3);
};
var s=sum(10,15,20);
console.log(s);
var f=sum(1,2,3);
console.log(f);

///



var mass=["привет", "loftschool"];
mass.push("я изучаю");
mass.push("JavaScript");
console.log(mass.length);

for (i=0; i<mass.length; i++) 
{console.log(mass[i]);};

////

var numbers=["12","164","56","456","345","22","433","11","99","112"];

for (i=0; i<numbers.length; i++) { 
  if(numbers[i]>100) {console.log(numbers[i]);};};

////

var me = {name: 'Юлия', lastname: 'Елкина', age: '29'};
console.log(me.name);
console.log(me.lastname);
console.log(me['age']);

me.city ='Москва';

console.log(me.city);

function hello(human) 
{return('Привет, меня зовут ' + human.name + ' ' + human.lastname + ' и мне ' + human.age + ' лет!')
};
var t = hello(me);

console.log(t);