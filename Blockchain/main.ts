const sha256 = require('crypto-js/sha256')

class Block{
    private _index: number;
    private _timestamp : string;
    private _data;
    private _previusHash
    private _hash;

    constructor(index: number, timestamp: string, data, previusHash  = ''){
    this._index = index;
    this._data = data;
    this._timestamp;
    this._data = data;
    this._previusHash = previusHash;
    }

    calculaHash(){
        return sha256(this._index + this._previusHash + this._timestamp +JSON.stringify(this._data)).toString();
    }
}

class BlockChain{
    private _chain;
    constructor(){
        this._chain = [this.creatGenesisBlock()];
    }

    creatGenesisBlock(){
        return new Block(0, "06/10/2017", "Genesis block", "0");
    }

    getLatesBlock(){
        return this._chain[this._chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previusHash = this.getLatesBlock().hash;
        newBlock.hash = newBlock.calculaHash();
        this._chain.push(newBlock);
    }
    
    isChaininValid(){
        for(let i = 1; i < this._chain.length; i++){
            const currentBlock = this._chain[i];
            const previusBlock = this._chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculaHash()){
                return false;
            }

            if(currentBlock.previusHash !== previusBlock.hash){
                return false;
            }
        }

        return true;
    }

}

let sevjeeCoin = new BlockChain();
sevjeeCoin.addBlock(new Block(1,"06/10/2017", { amount: 4}));
sevjeeCoin.addBlock(new Block(2,"06/10/2017", { amount: 10}))

console.log('Essa blockchain é valida ?' + sevjeeCoin.isChaininValid());

//console.log(JSON.stringify(sevjeeCoin, null, 4));
