
class GeneradorCarrito{

    //atributos de la clase;
    montoTotal;
    productos;
    //constructor;
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
    }
    //Método de la clase;
    AgregarProducto(nombre,precio,unidades){
        if(this.productos.find(element => element === nombre)){
           console.log("Ya existe el producto " + nombre + " con " + unidades + " unidades");
           this.productos.shift(nombre);
        }
        this.productos.push(nombre);
        this.montoTotal = this.montoTotal + precio;
    }
}
let MiCarrito = new GeneradorCarrito();

MiCarrito.AgregarProducto("Leche",10,2);
MiCarrito.AgregarProducto("yerba",11,3);
MiCarrito.AgregarProducto("Leche",10,2);
MiCarrito.AgregarProducto("Manteca",5,2);

console.log(MiCarrito);






