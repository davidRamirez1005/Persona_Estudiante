class Empleado{
    static generarIdEmpleado(){
        incremento++
    }
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
document.addEventListener("click",(e)=>{
    
    if(e.target.id == "continuarEmpleado"){
        e.preventDefault()
        e.stopPropagation()
        let nombreEmpleado = document.getElementById("nombreEmpleado").value
        let edadEmpleado = document.getElementById("edadEmpleado").value
        let sueldoEmpleado = document.getElementById("sueldoEmpleado").value

        let empleado1 = new Empleado({nombre:nombreEmpleado,edad:edadEmpleado,sueldo:sueldoEmpleado})
        console.log('====================================');
        console.log(empleado1);
        document.getElementById("nameEmpleado").innerHTML=empleado1.getNombre
        document.getElementById("ageEmpleado").innerHTML=empleado1.getEdad
        document.getElementById("moneyEmpleado").innerHTML=empleado1.getSueldo
        console.log('====================================');
        console.log(empleado1.calcularSalarioAnual(empleado1.getSueldo));
        document.getElementById("salarioEmpleado").innerHTML=empleado1.calcularSalarioAnual(empleado1.getSueldo)
    }
})

document.addEventListener("click",(e)=>{
    
    if(e.target.id == "continuarGerente"){
        e.preventDefault()
        e.stopPropagation()
        let nombreGerente = document.getElementById("nombreGerente").value
        let edadGerente = document.getElementById("edadGerente").value
        let sueldoGerente = document.getElementById("sueldoGerente").value
        let departamentoGerente = document.getElementById("departamentoGerente").value
        let gerente1 = new Gerente({nombre:nombreGerente,edad:edadGerente,sueldo:sueldoGerente,departamento:departamentoGerente})
        console.log('====================================');
        console.log(gerente1.calcularSalarioAnual(gerente1.getSueldo));
        console.log('====================================');
        console.log(gerente1);
        document.getElementById("nameGerente").innerHTML=gerente1.getNombre
        document.getElementById("edadGerente").innerHTML=gerente1.getEdad
        document.getElementById("moneyGerente").innerHTML=gerente1.getSueldo
        document.getElementById("depaGerente").innerHTML=gerente1.getDepartamento
        document.getElementById("salarioGerente").innerHTML=gerente1.calcularSalarioAnual(gerente1.getSueldo)
    }
})