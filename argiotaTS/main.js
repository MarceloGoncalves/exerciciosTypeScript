//Marcelo Gonçalves da Silva Costa  | MartriculaDD:401271
var input = require('readline-sync');
class Transacao {
    constructor() {
        this.id = 0;
        this.cliente = "";
        this.valor = 0;
    }
}
class Sistema {
    constructor(valor = 0) {
        this.nextid = 0;
        this.balanco = valor;
        this.transacoes = [];
    }
    addTrn(nome, valor) {
        let transacao = new Transacao;
        if (valor < 0) {
            if (this.balanco >= (valor) * -1) {
                transacao.id = this.nextid;
                this.nextid += 1;
                transacao.cliente = nome;
                transacao.valor = valor;
                this.transacoes.push(transacao);
                this.balanco += valor;
                console.log("ok: transação " + transacao.id + " adcionada");
            }
            else {
                console.log("Erro: Não há dinheiro suficiente  para emprestimo");
            }
        }
        else {
            transacao.id = this.nextid;
            this.nextid += 1;
            transacao.cliente = nome;
            transacao.valor = valor;
            this.transacoes.push(transacao);
            this.balanco += valor;
            console.log("ok: transação " + transacao.id + " adcionada");
        }
    }
    rmTran(id) {
        for (let i in this.transacoes) {
            if (this.transacoes[i].id == id) {
                this.transacoes.splice(Number(i), 1);
                return true;
            }
        }
        return false;
    }
    mostrar() {
        console.log("Lista de Transações:");
        for (let transacao of this.transacoes) {
            console.log("\tid: " + transacao.id + " cliente: " + transacao.cliente + " valor: " + transacao.valor);
        }
    }
    mostrarCliente(nome) {
        let saldo = 0;
        for (let i in this.transacoes) {
            if (this.transacoes[i].cliente == nome) {
                console.log("\tid: " + this.transacoes[i].id + " nome: " + this.transacoes[i].cliente + " valor: " + this.transacoes[i].valor);
                saldo += Number(this.transacoes[i].valor);
            }
        }
        console.log("\tSaldo: " + saldo);
    }
    contarCliente() {
        let nomCli;
        nomCli = [];
        let soma = 0;
        for (let i in this.transacoes) {
            for (let j in this.transacoes) {
                if (String(this.transacoes[i].cliente) == String(this.transacoes[j].cliente)) {
                    let flag = true;
                    for (let x in nomCli) {
                        if (String(this.transacoes[i].cliente) == String(nomCli[x])) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        nomCli.push(String(this.transacoes[i].cliente));
                        soma += 1;
                    }
                }
            }
        }
        return soma;
    }
    fazerBalanco() {
        let soma = 0;
        for (let i in this.transacoes) {
            soma += Number(this.transacoes[i].valor);
        }
        return Number(soma);
    }
}
function interacao() {
    let op = [""];
    let sistema = new Sistema;
    sistema = inicialização(sistema);
    while (op[0] != "fim") {
        op = input.question("Digite algum comando ou help: ").split(" ");
        if (op[0] == "help") {
            console.log("\n\tiniciar $valor");
            console.log("\taddTran $nome $valor");
            console.log("\tshowTran");
            console.log("\trmTran $id");
            console.log("\tshowCli $nome");
            console.log("\tbalanco");
            console.log("\tcontarCli\n");
        }
        if (op[0] == "iniciar") {
            sistema = new Sistema(Number(op[1]));
            console.log("Sistema iniciado com: " + Number(op[1]));
        }
        if (op[0] == "addTran") {
            sistema.addTrn(op[1], Number(op[2]));
        }
        if (op[0] == "showTran") {
            sistema.mostrar();
        }
        if (op[0] == "rmTran") {
            if (sistema.rmTran(Number(op[1]))) {
                console.log("ok | Transação removida");
            }
            else {
                console.log("erro | Transação não enconrada");
            }
        }
        if (op[0] == "showCli") {
            if (sistema.mostrarCliente(String(op[1]))) {
            }
        }
        if (op[0] == "contarCli") {
            let x = sistema.contarCliente();
            console.log("\nExiste " + x + " clientes diferentes");
        }
        if (op[0] == "balanco") {
            let balance = Number(sistema.fazerBalanco());
            console.log("\tBalanco: " + balance);
        }
    }
}
function inicialização(sistema) {
    sistema = new Sistema(42000);
    console.log("########################### TESTE ###########################");
    let balance = Number(sistema.fazerBalanco());
    console.log("\nContar Clientes()");
    let x = sistema.contarCliente();
    console.log(x);
    sistema.addTrn("David", -2000);
    sistema.addTrn("Marcelo", 800);
    sistema.addTrn("Francisco", 3000);
    sistema.addTrn("João", -4000);
    sistema.addTrn("Marcelo", 100);
    balance = Number(sistema.fazerBalanco());
    console.log("fazerBalanco()\n\t" + balance);
    console.log("\nContar Clientes()");
    x = sistema.contarCliente();
    console.log(x);
    sistema.mostrar();
    console.log("\nRemover Transação()");
    sistema.rmTran(0);
    sistema.mostrar();
    console.log("\nmostrar Cliente $Marcelo");
    sistema.mostrarCliente("Marcelo");
    console.log("Contar Clientes()");
    x = sistema.contarCliente();
    console.log(x);
    balance = Number(sistema.fazerBalanco());
    console.log("fazerBalanco()\n\t" + balance);
    console.log("\n########################### TESTE ###########################");
    return sistema;
}
interacao();
//# sourceMappingURL=main.js.map