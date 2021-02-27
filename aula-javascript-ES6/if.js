/*
const array = [0,1,2,3,4,5];
array.forEach(item =>{
    if(item % 2 === 0 ){
        console.log(' O número', item,' é par:');
    }else{
        console.log(' O número', item,' é impar:');
    }
});


//else if
const array = [ 2,3,4,6,5,8,10,15];
array.forEach(item=>{
    if(item % 2 ===0){
        console.log(' O número', item,' é dividido por 2');
    }else if(item % 3 === 0){
        console.log(' O número', item,' é dividido por 3');
    }else if (item % 5 === 0){
        console.log(' O número', item,' é dividido por 5');
    }
})

const fruit = 'pera';
switch(fruit){
    case 'banana':
        console.log('R$ 3,00/Kg');
        break;

    case 'Banana':
        console.log('R$ 6,00/Kg');
        break;
    case 'pera':
    case 'mamão':
        console.log('R$ 2,00/Kg');
        break;

    default:
        console.log('Produto não existe no estoque');
        break;
}

const n = parseInt(gets());
var v = new Array(n);
for (let i=0;i < n;i++){
  v[i] = parseInt(gets());
}

const rafael  = Number(v.shift());

let  first = true;

for(let i = 0; i < n;i++) {
  const item  = Number(v[i]);
  
  if ( item > rafael ) {
    first = false;
  }
};

console.log(first ? "S" : "N");
*/
//complete o codigo com suas variaveis

const  N = Number(gets()); 
const  V = new Array(N);

let PRIMEIRO = true;

Array.from({ length: N }).forEach((_, i) => V1 {
  const item  = Number(gets(V1));
  
  if (item > PRIMEIRO) {
   let PRIMEIRO = false;
  }
});

console.log(PRIMEIRO  ? "S" : "N");
