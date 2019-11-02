var a = 15;
var b = 10;
a = a*NaN;
// array
var cities = ['Dnipro','Kyiv','Odessa'];
cities.push('Lviv','Kharkiv');
console.log(cities);
var user = {
    age:25,
    email:'nazar@ikota.fu',
    name:'Nazar'
};
user.index = 49000;
user['surname'] = 'Pupkin';

//console.log(user);
//console.log(cities.length);
var users = [
    {name:'Vasik',age:25},
    {name:'Givi',age:29},
    {name:'Sanyz',age:23},
];
users[0].year = '1996';
users[1].year = '';
users[2].year = '2000';
users[0].phones = ['+788','+356'];
console.log (users);
console.log (users[0].phones[0]);



var answer = prompt('your age?');
//console.log (answer);
if (answer < 20) {
    alert('You are so young');
} else if (answer > 100) {
    alert ('not valid');
} else  { 
    alert ('your age is ' + answer);
}
//console.log (answer);

/*var a = [];

if (a.length) {
    alert ('Atya-tya');
} else {
    alert ('inter value');
}


var a = '0';
var b = 5;
var c = 0;
var result =a && b && c;
console.log (result);*/

// var a = + prompt('Enter your number:');
// var o = prompt('Enter operation:')
// var b = + prompt('Enter your number:');
// var result;
//var result = a + b;
// if ( o === '+') {
//     result = a + b;
// } else if( o === '-') {
//     result = a - b;
// } else if( o === '*') {
//     result = a * b;
// } else if ( o === '/') {
//     result = a / b;
// switch(o){
//     case '+': result = a+b;break;
//     case '-': result = a-b;break;
//     case '*': result = a*b;break;
//     case '/': result = a/b;break;
// }
// //} else {alert ('please recopy this procetion')}
// alert('Your result = ' + result);

//=======

var names = ['vasa','petro','ann','kila','gala','fagot'];

for (var name of names){
    console.log(name)
}

// var res = 1 of names;
// alert (res);

//==============
var names = ['vasa','petro','ann','kila','gala','fagot'];
var cities = ['odessa','kyiv','dnipro','nikopol','kharkiv','herson'];
//console.log(containerNames);
function renderList(data, containerId) {
    var container = document.querySelector(containerId);
    var res = '';

    for (var item of data) {    
        res +=`<li>${item}</li>`;
    }
    
    container.innerHTML = res;
}
renderList (cities,'#cities');
renderList (names,'#names');
