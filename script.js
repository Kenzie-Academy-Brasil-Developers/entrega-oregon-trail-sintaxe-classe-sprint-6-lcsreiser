class Traveler {
    constructor(name){
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    set name(name){
        this._name = name
    }
    get name(){
        return this._name
    }

    set food(food){
        this._food = food
    }
    get food(){
        return this._food
    }

    set isHealthy(isHealthy){
        this._isHealthy = isHealthy
    }
    get isHealthy(){
        return this._isHealthy
    }


    hunt(){
        return this.food += 2
    }

    eat(){
        if(this.food > 0){
            this.food --
            this.isHealthy = true
        }
        else{
            return this.isHealthy = false
        }
    }
}

class Wagon{
    constructor(capacity){
        this._capacity = capacity
        this._list = []
    }

    set capacity(capacity){
        this._capacity = capacity
    }
    get capacity(){
        return this._capacity
    }

    set list(list){
        this._list = list
    }
    get list(){
        return this._list
    }


    getAvailableSeatCount(){
        return this.capacity - this.list.length
    }

    join(name){
        if(this.capacity > this.list.length){
            this.list.push(name)
        }
        else{
            return `Carroça já está cheia`
        }
    }
    
    shouldQuarantine(isHealthy){

        this.list.forEach(pessoa =>{
            if(!pessoa.isHealthy){
                isHealthy = false
            }
        })
        if(isHealthy){
            return false
        }
        return true

    }

    totalFood(){
        let comidaVillager = []
        let totalcomida = 0

        this.list.forEach(pessoa =>{
            comidaVillager.push(pessoa.food)
        })

        totalcomida = comidaVillager.reduce((acc, curr) => acc+curr)

        return totalcomida
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);