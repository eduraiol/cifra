import { createHash } from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("Eduardo Raiol"));

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){

        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Uusário autenticado com sucesso!");
            return true;
        }

        console.log("Usuário ou senha incorretos!");
        return false;
    }
}

const usuario = new Usuario('Eduardo Raiol', 'edu123');

console.log(usuario);

//Caso de sucesso
usuario.autentica('Eduardo Raiol', 'edu123');

//Caso de fracasso
usuario.autentica('Eduardo raiol', 'edu123');