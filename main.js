class Persona{
    static esMayorEdad(edad){
        if (edad > 17) {
            console.log("es mayor de edad");
        }
        else{
            console.log("es menor de edad");

        }
    }
    _nombre
    _edad
    _sexo
    constructor({nombre="",edad="",sexo=""}){
        this._nombre = nombre
        this._edad = sexo
        this.Sexo = sexo
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
    get edad(){
        return this._edad
    }
    set edad(nuevoEdad){
        this._edad = nuevoEdad
    }
    get sexo(){
        return this._sexo
    }
}














class Estudiante extends Persona {
    super()
}