class classeHeroi{
    constructor(nome,idade,tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    atacar(){
        let ataque1=' '
        if(this.tipo==='guerreiro'){
            ataque1='espada'
        }
        else if(this.tipo==='mago'){
            ataque1='magia'
        }
        else if(this.tipo==='monge'){
            ataque1='artes marciais'
        }
        else if(this.tipo==='ninja'){
            ataque1='shuriken'
        }
        else{
            console.log(`${this.tipo} não é um tipo de heói válido!`)  
            return
        }
        console.log(`o ${this.tipo} atacou usando ${ataque1}`)
    }
}

meuHeroi= new classeHeroi('Matheus','16','ninja')
meuHeroi.atacar()