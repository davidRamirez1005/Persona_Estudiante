class Empleado{
    _nombre
    _edad
    _sueldo
    constructor({nombre="",edad="",sueldo=""}){
        this._nombre = nombre
        this._edad = edad
        this._sueldo = sueldo
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
    get getSueldo() {
        return this._sueldo
    }
    set setSueldo(nuevoSueldo) {
        this._sueldo = nuevoSueldo
    }
    calcularSalarioAnual(sueldo){
        return sueldo * 12
    }
}
let empleado1 = new Empleado({nombre:"jose",edad:"19",sueldo:"60000000"})
console.log('====================================');
console.log(empleado1);
console.log('====================================');
console.log(empleado1.calcularSalarioAnual(empleado1.getSueldo));

class Gerente extends Empleado{
    _departamento
    constructor({nombre="",edad="",sueldo="",departamento=""}){
        super({nombre,edad,sueldo})
        this._departamento = departamento
    }
    get getDepartamento() {
        return this._departamento
    }
    set setDepartamento(nuevoDepartamento) {
        this._departamento = nuevoDepartamento
    }
    calcularSalarioAnual(salario){
        return (parseFloat(salario) + 0.10) * (parseFloat(salario) * 12)
    }
}

let gerente1 = new Gerente({nombre:"",edad:"",sueldo:"340000",departamento:""})
console.log('====================================');
console.log(gerente1.calcularSalarioAnual(gerente1.getSueldo));
console.log('====================================');
console.log(gerente1);