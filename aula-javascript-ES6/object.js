let user = {
    name:'Alex'
};

//Alterando a propriedade de um objeto
//console.log(user);

user.name = 'Outro nome 1';
//console.log(user);
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro none 3';

//console.log(user);

//Criando uma propriedade
user.lastName = 'Ferreira';


//Deletando uma propriedade
console.log(user);
delete user.name;