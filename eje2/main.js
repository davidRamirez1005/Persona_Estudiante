class Animal{
    _nombre
    _edad
    constructor({nombre="", edad=""}){
        this._nombre = nombre
        this._edad = edad
    }
    get getNombre(){
        return this._nombre
    }
    set setNombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
    get getEdad(){
        return this._nombre
    }
    set setEdad(nuevaEdad){
        this.edad = nuevaEdad
    }
    hacerSonido(){

    }
}

