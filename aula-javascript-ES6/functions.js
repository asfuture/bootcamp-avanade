function fn(){
    return ' Code here';
}

const arrowfn = () => 'Code here';
const arrowfn2 = () =>{
    //Mais de uma expressão
    return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn(fn.prop));

//Receber parámetros

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
if(allowed){
    fnParam();
    }
}

const handlefnExecution = controlFnExec(fn);

handlefnExecution(true);//Executará a função
handlefnExecution();//Não executará a função

//ControlFnExec com função
function ControlFnExec(fnParam){
    return function(allowed){
        if(allowed)
        fnParam();
    }
}