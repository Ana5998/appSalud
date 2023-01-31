class paciente{
    
    nombre=null;
    apellido=null;
    fecha=null;
    bascula=null;
    
    constructor(n,a,f) {

        this.nombre=n;
        this.apellido=a;
        this.fecha=f;

    }

    saludar() {

        var hola="Hola soy " + this.nombre + " " + this.apellido;

        return hola;

    }

    obtenerNombre() {

        return this.nombre;

    }

    modificarNombre(nom) {

        this.nombre=nom;

    }

    obtenerApellidos() {

        return this.apellido;

    }

    modificarApellidos(ape) {

        this.apellido=ape;

    }

    obtenerFechaNacimiento() {

        return this.fecha;

    }

    modificarFechaNacimento(fech) {

        this.fecha=fech;

    }

    obtenerEdad() {

    }

    modificarBascula(basc) {

        this.bascula=basc;

    }

    obtenerBascula() {

        return this.bascula;

    }

    calcularIMC() {



    }

}
