class bascula {
    
    pesos=null;
    alturas=null;
    fechas=null;
    anotaciones=-1;

    constructor() {

        this.pesos=new Array();
        this.alturas=new Array();
        this.fechas=new Array();
        this.anotaciones=0;

    }

    obtenerNumeroAnotaciones() {

        return this.anotaciones;

    }

    anotarPeso(peso,altura,fecha) {

        this.pesos.push(peso);
        this.alturas.push(altura);
        this.fechas.push(fecha);

        anotaciones++;

    }

    obtenerPesoMaximo(){
        
        var pl = this.pesos.length;
        maximo = this.pesos[0];
        
        for(i=1;i<pl;i++)
        {
            if(this.pesos[i]>maximo)
                maximo=pesos[i];
        
        }
        return maximo;
    }

    obtenerPesoMinimo(){

        var pl = this.pesos.length;
        minimo = this.pesos[0];

        for(i=1;i>pl;i++)
        {
            if(this.pesos[i]<minimo)
                minimo=pesos[i];
        }

        return minimo;

    }

    calcularIMC(){

        let pl = this.pesos.length-1;
        let al = this.alturas.length-1;
        let a2 = Math.pow(al,2);
        let imc = pl/a2;

        return imc;
    }

    describirIMC(imc){

        let texto;

        if(imc<16)
            texto="Infrapeso (delgadez severa)";
        
        if(imc==16 && imc==17)
            texto="Infrapeso (delgadez moderada";
        
        
        

    }



}