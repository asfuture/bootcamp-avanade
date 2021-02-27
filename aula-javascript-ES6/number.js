const mynumber = 12.4032;

//transformar número para string
const numberAsString = mynumber.toString();
console.log('Número transformador em string :',typeof numberAsString );

//transformar número com um número de casas décimais
const fixedTwoDecimals = mynumber.toFixed(2);
console.log('Número com duas casas décimais :',fixedTwoDecimals );

//transformar uma string em float
console.log('\nString paeseada para float:',parseFloat('13.22'));

//transformar uma string em int
console.log('\nString paeseada para float:',parseInt('13.22'));

//null
const nullVarible = null;
console.log(nullVarible);

//undefined
const undef ='' ;
console.log(undef );

//boolean
const isActive =true;
const isAuthenticated = false;
console.log('Tipo da variável :',typeof isAuthenticated);

