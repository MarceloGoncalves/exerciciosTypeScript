//include do readline-sync
declare function require(name : string);
var input = require('readline-sync');

class Segredo{
    private _nivel : number;
    private _texto : string;
    constructor(texto : string){
        this.texto = texto;
        this.nivel = 1;
        
    }
}


class Usuario{
   private _username : string;
   private _password : string;
   private _isAdmin : boolean;
   private _segredo : Segredo;
    constructor(username : string, password : string){
        this.username = username;
        this.password = password;

        if ((this.username == "admin" ) && (this.password == "admin")){

        }
    }

    matchPassword(password : string) : boolean {
        return true
    }

    changePassword(password : string) : boolean {
        return true
    }

    
}


class Sistem{
    private _usuarios : Usuario[];
    
    constructor(){
        this.usuarios.push()
    }

    addUser(username : string, password : string) : boolean{
        return true
    }
    
    rmUser(username : string) : boolean{
        return true
    }
}

class Controller{
    siste : Sistem;
    usuario : Usuario;

    comandLine(): void {

    }
}