class Figura {
    constructor({ color = "", area = "" }) {
        this._color = color;
        this._area = area;
    }

    get color() {
        return this._color;
    }

    set color(nuevoColor) {
        this._color = nuevoColor;
    }

    calcularArea() {
    }
}

class Circulo extends Figura {
    constructor({ color = "", radio = "" }) {
        super({ color, area: "" });
        this._radio = radio;
    }

    get radio() {
        return this._radio;
    }

    set radio(nuevoRadio) {
        this._radio = nuevoRadio;
    }

    calcularArea() {
        return Math.PI * this._radio * this._radio;
    }
}

class Rectangulo extends Figura {
    constructor({ color = "", base = "", altura = "" }) {
        super({ color, area: "" });
        this._base = base;
        this._altura = altura;
    }

    get base() {
        return this._base;
    }

    set base(nuevaBase) {
        this._base = nuevaBase;
    }

    get altura() {
        return this._altura;
    }

    set altura(nuevaAltura) {
        this._altura = nuevaAltura;
    }

    calcularArea() {
        return this._base * this._altura;
    }
}
document.addEventListener("click",(e)=>{
    if(e.target.id == "continuarCirculo"){
        e.preventDefault()
        e.stopPropagation()
        let colorCirculo = document.getElementById("colorCirculo").value
        let radio = document.getElementById("radio").value

        let circulo = new Circulo({ color: colorCirculo, radio: radio});
        console.log("Información del círculo:");
        console.log("Color: " + circulo.color);
        console.log("Radio: " + circulo.radio);
        console.log("Área: " + circulo.calcularArea());
        document.getElementById("colorCir").innerHTML = ("Color: " + circulo.color)
        document.getElementById("radioCirculo").innerHTML = ("Radio: " + circulo.radio)
        document.getElementById("area").innerHTML = ("Área: " + circulo.calcularArea())
    }
})


document.addEventListener("click",(e)=>{
    
    if(e.target.id == "continuarRectangulo"){
        e.preventDefault()
        e.stopPropagation()
        let colorRectangulo = document.getElementById("colorRectangulo").value
        let base = document.getElementById("base").value
        let altura = document.getElementById("altura").value

        let rectangulo = new Rectangulo({ color: colorRectangulo, base: base, altura: altura });
        console.log("Información del rectángulo:");
        console.log("Color: " + rectangulo.color);
        console.log("Base: " + rectangulo.base);
        console.log("Altura: " + rectangulo.altura);
        console.log("Área: " + rectangulo.calcularArea());

        document.getElementById("colorRec").innerHTML = ("Color: " + rectangulo.color)
        document.getElementById("baseRec").innerHTML = ("Base: " + rectangulo.base)
        document.getElementById("radioRec").innerHTML = ("Altura: " + rectangulo.altura)
        document.getElementById("areaRec").innerHTML = ("Área: " + rectangulo.calcularArea())
    }

})