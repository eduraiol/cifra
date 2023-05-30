import { createHash } from 'crypto';

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha){

        if(nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Uusário autenticado com sucesso!");
            return true;
        }
        // console.log("Usuário ou senha incorretos!");
        return false;
    }
}

const usuario = new Usuario('Eduardo Raiol', '1302');

//Força bruta para senha numérica, que não comece com 0, e tenha apenas 4 dígitos
for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
    if(usuario.autentica("Eduardo Raiol", senhaTeste.toString())){
        console.log(`A senha do usuário é ${senhaTeste}`);
    }
}