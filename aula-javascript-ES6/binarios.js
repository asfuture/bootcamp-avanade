//Arrays
var arvores = new Array["pau-brasil","Loureriro","cedro","carvalho","sicômoro"];
0 in arvores;   //retorna true
3 in arvores;   //retorna true
6 in arvores;   //retorna true
  "cedro" in arvores  //retorna false {Você dever especificar o número do indice}
  "length" in arvores //Retorna true (length) é uma propriedade de Array.

  //Objetos predefinidos
"PI" in Math;  //retorna true
var minhaString  = new String('coral');
"length" in minhaString; //retorna true

//Objetos personalizados
var meucarro = {
    marca:"Honda",
    modelo: "Accord",
    ano: 1989
};
"marca" in meucarro; //retorne true
"modelo" in meucarro //retorne true

//instaceof
Object instanceof tipoObjeto
var dia = new Date(2021,02,21);
if(dia instanceof Date){
    //code here  
}