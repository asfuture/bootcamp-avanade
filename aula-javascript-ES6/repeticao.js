/*for ([expressaoInicial];.[condicão];[incremento])
declaração

const Array = ['one','two','three'];

for(let index = 0; index < Array.length; index++){
    const element = Array[index];
    console.log('Element',index,':',element);
}
//while
var n = 0;
var x = 0;
while(n<3){
    n++;
    x+=n;
}
console.log(x);

//Do while
let i=0;
do{
  i+=1;
  console.log(i);   
}while(i<5);

let arr = [3,5,7];
    arr.foo = 'Hello';
    for (let i in arr){
        console.log(i);
    }
    for (let i of arr){
        console.log(i);
    }

//Break
console.log("Exemplor de como utilizar o break");
var index = 0;
while(true){
    index++;
    if(index > 2){
        break;
    }
    console.log(index);
}
//continue
console.log("Exemplo da utilização de continue");
const array = [1,2,3,4,5,6];

for(let index=0; index <array.length; index++){
    const element = array[index];
    if(element % 2 ===0){
        continue;
    }
    console.log(element);
}
*/
