// function hello(user="Guest"){
//     console.log(`hello ${user}`);
// }
// hello('Ritesh');
// hello();
// function sum(a=0,b=0){
//     console.log("Before return");
//     return a+b;
// }
// console.log(sum(34,89));
// console.log(sum(34));
// console.log(sum());

//Arrow Function
// const hello=()=>console.log("Hello from arrow function");
// hello();
const sum=(a,b)=>a+b;
console.log(sum(34,89));
(function(){
console.log("IIFE Example");
})();
function hello(user,callback){
    console.log(`hello ${user}`);
    callback();
}
hello("Admin",()=>{
    console.log(sum(4,5))
});
hello("Admin",function(){
    console.log(sum(40,50))});