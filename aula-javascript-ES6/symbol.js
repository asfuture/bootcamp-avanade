const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbol são Únicos 
console.log('symboli é igual a symbol2 :',symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]:'Alex Ferreira',
    [nameSymbol2]:'Outro nome',
    lastName: 'Alex Santos'
}
console.log(user);

//Symbol criam propriedade que não são enumerables
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log('\n Valor da chave', key ,':', user[key]);
    }
}

//criar um enum
const directions ={
    UP :Symbol('UP'),
    DOWN :Symbol('DOWN'),
    LEFT :Symbol('LEFT'),
    RIGHT :Symbol('RIGHT')
};