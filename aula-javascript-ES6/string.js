//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Quantidade de letras :',textSize);

//Retorna um array qubrado a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador :',splittedText);

//Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text','oxet');
console.log('\nSubstitui o valor de uma string aq:',replaceText);

//Busca a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de um string:',lastChar);


const allwithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a última',allwithoutLastChar);


const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última',secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nNas duas letras primeiras sãoaqry:',twoCharBeforeFirstPos);