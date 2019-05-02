//Marcelo Gonçalves da Silva Costa  | MartriculaDD:401271

//include do readline-sync
declare function require(name : string);
var input = require('readline-sync');


class Passageiro{
    private __nome : string;
    private __id : number;

    
    setNome(nome : string){
        this.__nome = nome;
        this.__id += 1;
    }

    getNome() : string {
        return this.__nome
    }

    getId() : number{
        return this.__id;
    }

    setId(id : number){

    }

    toString(){
        console.log("id: " +this.__id + "\nNome: " +this.__nome); 
    }
}


class Vagao{

    private __id : number;
    private __qtdMaxPassageiros : number;
    private __qtdPassageirosSentados: number;
    private __listPassageiros : Array<Passageiro | null>;

    constructor(id : number, qtdPassageiros : number){
        this.__id = id
        this.__qtdMaxPassageiros = qtdPassageiros;

        for(let i = 0; i < qtdPassageiros; i++){
            this.__listPassageiros.push(null);

        }
    }
    
    getQtdPassageiros() : number {
        return this.__qtdPassageirosSentados;
    }

    embarcar(passageiro : Passageiro) : boolean {
        if(this.__qtdPassageirosSentados < this.__qtdMaxPassageiros){
            this.__qtdPassageirosSentados += 1;
            this.__listPassageiros.push(passageiro);
            return true
        }
        return false
    }

    desembarcar(id : number) : boolean {
        return true
    }

    procurarPassageiro(id : number) : Passageiro {
        return
    }

    show(){
    }
}


class Trem{
    private __id : number;
    private __listPassageiros : Array<Passageiro>;
    private __qtdVagoes : number;
    private __qtdVagoesAlocado : number;

    constructor(qtdVagoes : number = 10){

        this.__qtdVagoes = qtdVagoes;
        this.__qtdVagoesAlocado = 0;
        this.__id = 1;
    }

    addVagao(vagao : Vagao) : boolean {
        if(this.__qtdVagoesAlocado < this.__qtdVagoes){
            this.__qtdVagoesAlocado += 1;
            return true;
        }
        return false;
    }

    getQtdVagoes() : number{
        return this.__qtdVagoesAlocado;
    }

    embarcar(passageiro : Passageiro) : boolean{
        return
    }

    desembercar(id : number) : boolean{
        return
    }

    procurarPassageiro(id : number) : Passageiro{
        return
    }

    show(){

    }

}


function Controlador(){
    
    let op : string[] = [""];
    let trem : Trem;

    while(op[0] != "fim"){

        op = input.question("Digite algum comando ou help: ").split(" ");
        
        if(op[0] == "help"){
            console.log("######################## HELP ########################")
            console.log("\n\tiniciarTrem $qtdVagoes")
            console.log("\taddVagao $qtdLugares")
            console.log("\n######################## HELP ########################")
        } 

        if(op[0] == "iniciarTrem"){
            if(trem = new Trem((Number(op[1])))){
                console.log("Trem Iniciado!")
            }
            else{
                console.log("erro | iniciar Trem")
            }
            
        }

        if(op[0] == "addVagao"){
            let vagao = new Vagao(Number(op[1]));
           if(trem.addVagao(vagao)) {
               console.log("Vagao Adicionado")
           }
           else{
               console.log("erro | limite de vagoes atigindo")
           }

        }

        if(op[0] == ""){

        }

    }

        

}



function teste(){

}

Controlador();
