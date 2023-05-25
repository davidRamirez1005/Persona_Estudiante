class Vehiculo{
    static convertirKmHEnMph(velocidad){
        return velocidad/160934
    }
    _marca
    _modelo
    _velocidad
    constructor({marca="",modelo="",velocidad=""}){
        this._marca = marca
        this._modelo = modelo
        this,this._velocidad = velocidad
    }
    get getMarca() {
        return this._marca
    }
    set setMarca(nuevaMarca) {
        this._marca = nuevaMarca
    }
    get getModelo() {
        return this._modelo
    }
    set setModelo(nuevoModelo) {
        this._modelo = nuevoModelo
    }
    get getVelocidad() {
        return this._velocidad
    }
    set setVelocidad(nuevaVelocidad) {
        this._velocidad = nuevaVelocidad
    }
    acelerar(velocidad){
        return parseFloat(velocidad)+10
    }
}
class Coche extends Vehiculo{
    _combustible
    constructor({marca,modelo,velocidad,combustible=""}){
        super({marca,modelo,velocidad})
        this._combustible = combustible
    }
    get getCombustible() {
        return this._combustible
    }
    set setCombustible(nuevoCombustible) {
        this._combustible = nuevoCombustible
    }
    acelerar(velocidad){
        return parseFloat(velocidad) + 20        
    }
}
document.addEventListener("click",(e)=>{
    if(e.target.id == "continuarVehiculo"){
        e.preventDefault()
        e.stopPropagation()
        let marcaVehiculo = document.getElementById("marcaVehiculo").value
        let modeloVehiculo = document.getElementById("modeloVehiculo").value
        let velocidadVehiculo = document.getElementById("velocidadVehiculo").value

        let vehiculo1 = new Vehiculo({marca:marcaVehiculo,modelo:modeloVehiculo,velocidad:velocidadVehiculo})
        console.log('====================================');
        console.log(vehiculo1);
        document.getElementById("marcaVehi").innerHTML = vehiculo1.getMarca
        document.getElementById("modeloVehi").innerHTML = vehiculo1.getModelo
        document.getElementById("velocidadVehi").innerHTML = vehiculo1.getVelocidad
        console.log('====================================');
        console.log(vehiculo1.acelerar(vehiculo1.getVelocidad));
        document.getElementById("acelerado").innerHTML = vehiculo1.acelerar(vehiculo1.getVelocidad)
        console.log('====================================');
        console.log(Vehiculo.convertirKmHEnMph(vehiculo1.getVelocidad));
        document.getElementById("convertidor").innerHTML = Vehiculo.convertirKmHEnMph(vehiculo1.getVelocidad)
        console.log('====================================');
    }
})

document.addEventListener("click",(e)=>{
    if(e.target.id == "continuarCoche"){
        e.preventDefault()
        e.stopPropagation()
        let marcaVehi = document.getElementById("marcaCoche").value
        let modeloCoche = document.getElementById("modeloCoche").value
        let velocidadCoche = document.getElementById("velocidadCoche").value
        let combustibleCoche = document.getElementById("combustibleCoche").value

        let coche1 = new Coche({marca:marcaVehi,modelo:modeloCoche,velocidad:velocidadCoche,combustible:combustibleCoche})
        console.log('====================================');
        console.log(coche1);
        document.getElementById("marcaCoc").innerHTML = coche1.getMarca
        document.getElementById("modeloCoc").innerHTML = coche1.getModelo
        document.getElementById("velocidadCoc").innerHTML = coche1.getVelocidad
        document.getElementById("combusCoc").innerHTML = coche1.getCombustible
        console.log('====================================');
        console.log(coche1.acelerar(coche1.getVelocidad));
        document.getElementById("aceleradoCoche").innerHTML = coche1.acelerar(coche1.getVelocidad)
    }
})