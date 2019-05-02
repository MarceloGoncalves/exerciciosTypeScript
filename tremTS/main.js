//Marcelo Gonçalves da Silva Costa  | MartriculaDD:401271
var input = require('readline-sync');
class Passageiro {
    setNome(nome) {
        this.__nome = nome;
        this.__id += 1;
    }
    getNome() {
        return this.__nome;
    }
    getId() {
        return this.__id;
    }
    setId(id) {
    }
    toString() {
        console.log("id: " + this.__id + "\nNome: " + this.__nome);
    }
}
class Vagao {
    constructor(qtdPassageiros) {
        this.__qtdMaxPassageiros = qtdPassageiros;
        this.__qtdPassageirosSentados = 0;
        this.__listPassageiros = [];
    }
    getQtdPassageiros() {
        return this.__qtdPassageirosSentados;
    }
    embarcar(passageiro) {
        if (this.__qtdPassageirosSentados < this.__qtdMaxPassageiros) {
            this.__qtdPassageirosSentados += 1;
            this.__listPassageiros.push(passageiro);
            return true;
        }
        return false;
    }
    desembarcar(id) {
        return true;
    }
    procurarPassageiro(id) {
        return;
    }
    show() {
    }
}
class Trem {
    constructor(qtdVagoes = 10) {
        this.__qtdVagoes = qtdVagoes;
        this.__qtdVagoesAlocado = 0;
        this.__id = 1;
    }
    addVagao(vagao) {
        if (this.__qtdVagoesAlocado < this.__qtdVagoes) {
            this.__qtdVagoesAlocado += 1;
            return true;
        }
        return false;
    }
    getQtdVagoes() {
        return this.__qtdVagoesAlocado;
    }
    embarcar(passageiro) {
        return;
    }
    desembercar(id) {
        return;
    }
    procurarPassageiro(id) {
        return;
    }
    show() {
    }
}
function Controlador() {
    let op = [""];
    let trem;
    while (op[0] != "fim") {
        op = input.question("Digite algum comando ou help: ").split(" ");
        if (op[0] == "help") {
            console.log("######################## HELP ########################");
            console.log("\n\tiniciarTrem $qtdVagoes");
            console.log("\taddVagao $qtdLugares");
            console.log("\n######################## HELP ########################");
        }
        if (op[0] == "iniciarTrem") {
            if (trem = new Trem((Number(op[1])))) {
                console.log("Trem Iniciado!");
            }
            else {
                console.log("erro | iniciar Trem");
            }
        }
        if (op[0] == "addVagao") {
            let vagao = new Vagao(Number(op[1]));
            if (trem.addVagao(vagao)) {
                console.log("Vagao Adicionado");
            }
            else {
                console.log("erro | limite de vagoes atigindo");
            }
        }
        if (op[0] == "") {
        }
    }
}
function teste() {
}
Controlador();
//# sourceMappingURL=main.js.map