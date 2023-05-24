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
        this._edad = edad
        this._sexo = sexo
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
    saludar(){
        console.log(`Hola, soy ${this.nombre} y los estoy saludando`);
      }
}

const persona1 = new Persona({nombre:'Jose David',edad: 19,sexo: "Masculino"});
console.log(persona1.nombre); 
console.log(persona1.edad); 
console.log(persona1.sexo); 
console.log(persona1);
persona1.saludar()


class Estudiante extends Persona {
    _carrera
    constructor({ nombre = "",edad="",sexo="", carrera = "" }){
        super({ nombre,edad,sexo })
        this._carrera = carrera
    }
    get carrera(){
        return this._carrera
    }
    set carrera(nuevaCarrera){
        this._carrera = nuevaCarrera
    }
    estudiar(){
        console.log(`Yo ${this.nombre}, estoy estudiando: ${this.carrera}`)
        return `Yo ${this.nombre}, estoy estudiando: ${this.carrera}`
    }
}
const estudiante1 = new Estudiante({nombre:'Juan Diego',edad: 18,sexo: "Masculino",carrera:"Desarrollo web"});
console.log("-----------------------------------------------");
console.log(estudiante1.carrera); 
estudiante1.estudiar()
console.log(estudiante1);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(Persona.esMayorEdad(persona1.edad));

document.addEventListener("click",(e)=>{
    
    if(e.target.id == "continuarPersona"){
        e.preventDefault()
    e.stopPropagation()
    let nombrePersona = document.getElementById("nombrePerson").value
    let edadPersona = document.getElementById("edadPerson").value
    let sexoPersona = document.getElementById("sexoPerson").value
    let a = estudiante1.saludar() 
    document.getElementById("saludito").innerHTML=a ;
    }

})