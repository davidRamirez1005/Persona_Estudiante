class Animal {
    _nombre
    _edad
    constructor({nombre="", edad=""}) {
        this._nombre = nombre
        this._edad = edad
    }
    get getNombre() {
        return this._nombre
    }
    set setNombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }
    get getEdad() {
        return this._edad
    }
    set setEdad(nuevaEdad) {
        this._edad = nuevaEdad
    }
    hacerSonido(sonido) {
        return sonido
    }
}

// let animal1 = new Animal({nombre: "luna", edad: "3"})
// console.log('====================================');
// console.log(animal1);
// console.log('====================================');
// console.log('====================================');
// let sonido = "mia miu mioiua"
// console.log(animal1.hacerSonido(sonido));
// console.log('====================================');

class Perro extends Animal {
    _raza
    constructor({nombre, edad, raza=""}) {
        super({nombre, edad})
        this._raza = raza
    }
    get getRaza() {
        return this._raza
    }
    set setRaza(nuevaRaza) {
        this._raza = nuevaRaza
    }
    moverCola() {
        return "El perro está moviendo la cola"
    }
}

// let perro1 = new Perro({nombre: animal1.getNombre, edad: animal1.getEdad, raza: "pitbull"})
// console.log('====================================');
// console.log(perro1);
// console.log('====================================');
// console.log(perro1.moverCola());

let animal1;
document.addEventListener("click",(e)=>{
    
    if(e.target.id == "continuarAnimal"){
        e.preventDefault()
        e.stopPropagation()
        let nombre = document.getElementById("nombre").value
        let edad = document.getElementById("edad").value
        let sonido = document.getElementById("sonido").value
        animal1 = new Animal({nombre: nombre, edad: edad})
        console.log('====================================');
        console.log(animal1);
        document.getElementById("nameAnimal").innerHTML= animal1.getNombre ;
        document.getElementById("ageAnimal").innerHTML= animal1.getEdad ;
        document.getElementById("soundAnimal").innerHTML= animal1.hacerSonido(sonido) ;
        console.log('====================================');
        console.log('====================================');
        console.log(animal1.hacerSonido(sonido));
        console.log('====================================');
    }
})

document.addEventListener("click",(e)=>{
    
    if(e.target.id == "continuarPerro"){
        e.preventDefault()
        e.stopPropagation()
        let raza = document.getElementById("raza").value
        let perro1 = new Perro({nombre: animal1.getNombre, edad: animal1.getEdad, raza: raza})
        console.log('====================================');
        console.log(perro1);
        document.getElementById("namePerro").innerHTML= perro1.getNombre ;
        document.getElementById("agePerro").innerHTML= perro1.getEdad;
        document.getElementById("racePerro").innerHTML= perro1.getRaza ;

        console.log('====================================');
        console.log(perro1.moverCola());
        document.getElementById("instancia").innerHTML=perro1.moverCola()
    }

})