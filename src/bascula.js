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

    anotarPeso(peso,altura,fecha=new Date()) {

        this.pesos.push(peso);
        this.alturas.push(altura);
        this.fechas.push(fecha);
        this.anotaciones++;

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

        let texto="";

        if(imc<16)
            texto="<16.00: Infrapeso (delgadez severa)";
        
        if(imc==16 && imc==17)
            texto="16.00 – 16.99: Infrapeso (delgadez moderada)";
            
        if(imc==17 && imc==18.5)
            texto="17.00 - 18.49: Infrapeso (delgadez aceptable)";   
        
        if(imc==18.5 && imc==25)
            texto="18.50 - 24.99: Peso normal";
        
        if(imc==25 && imc==30)
            texto="25.00 - 29.99: Sobrepeso";

        if(imc==30 && imc==35)
            texto="30.00 - 34.99: Obeso (Tipo I)";

        if(imc==35 && imc==40)
            texto="35.00 - 40.00: Obeso (Tipo II)";

        if(imc>40)
            texto=">40.00: Obeso (Tipo III)";
        

    }



}

module.exports=Bascula;