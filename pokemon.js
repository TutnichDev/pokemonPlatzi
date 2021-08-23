class Pakiman 
{
    constructor(nombre,vida,ataque)
    {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen = new Image();
        this.imagen.src = urls[nombre];

    }
    hablar()
    {
        alert("soy "+this.nombre+" y me quedan "+this.vida+" hp")
    }
    dibujar()
    {
        document.write("Soy el Pakiman "+this.nombre +": <br/>");
        document.body.appendChild(this.imagen);
        document.write("<br/>vida: "+this.vida +": <br/>");
        document.write("ataque: "+this.ataque +": <br/><hr/><br/>")
    }
}

var urls = [];
urls["cauchin"] = "imagenes/vaca.png";
urls["pokacho"] = "imagenes/pollo.png";
urls["tocinauto"] = "imagenes/cerdo.png";
urls["pokefacha"] = "imagenes/pokefacha.jpeg";

var listado = [];
listado.push(cauchin = new Pakiman("cauchin",100,30));
listado.push(pokacho = new Pakiman("pokacho",80,50));
listado.push(tocinauto = new Pakiman("tocinauto",120,40));
listado.push(pokefacha = new Pakiman("pokefacha",1120,140));

cauchin.hablar() ;

for (var i of listado)
{
    i.dibujar();
    console.log
}



console.log(listado);

