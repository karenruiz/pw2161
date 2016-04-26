var turno = false;
var letraCasilla="";
var cuentaJuego=0;
var cuentaJugadas=0;

function iniciaGato()
{

}

validaJugada(letra)
{
	var ganador=false;
	var b11=document.getElementById("unouno").innerHTML;
	var b11=document.getElementById("unodos").innerHTML;
	var b11=document.getElementById("unotres").innerHTML;
	var b11=document.getElementById("dosuno").innerHTML;
	var b11=document.getElementById("dosdos").innerHTML;
	var b11=document.getElementById("dostres").innerHTML;
	var b11=document.getElementById("tresuno").innerHTML;
	var b11=document.getElementById("tresdos").innerHTML;
	var b11=document.getElementById("trestres").innerHTML;

	//Jugadas

	//Renglones
	if(b11==b12&&b12==b13&&b11!="&nbsp;")
	ganador = true;
	if(b21==b22&&b12==b23&&b21!="&nbsp;")
	ganador = true;
	if(b31==b32&&b32==b33&&b31!="&nbsp;")
	ganador = true;

	//Columnas
	if(b11==b12&&b21==b31&&b11!="&nbsp;")
	ganador = true;
	if(b12==b22&&b22==b32&&b12!="&nbsp;")
	ganador = true;
	if(b13==b23&&b23==b33&&b13!="&nbsp;")
	ganador = true;
	//Diagonales
	if(b11==b12&&b22==b33&&b11!="&nbsp;")
	ganador = true;
	if(b13==b22&&b22==b31&&b13!="&nbsp;")
	ganador = true;

	//¿Alguien ganó?
	if(gandor ==true) //if(ganador)
	{
		alert("!Ganador"+letra+"!");
	}
	else if(ganador == false && cuentaJugadas ==9)
	{
		alert("!Empate¡");
	}
}

function escribe(casilla)
{
	var letra="";
	letraCasilla= document.getElementaryId(casilla).innerHTML;
	//if(letraCasilla == "&letraCasilla!="0")
	if(letraCasilla !="X"&& letraCasilla!="O")
	{
		if(turno==false) //if(!turno)
			letra="X";
		else
			letra="O";
		document.getElementaryId(casilla).innerHTMl=letra;
		turno =!turno; //turno=true;
	}
	cuentaJugadas=cuentaJugadas+1;
	//Para saber quien ganó, validamos la jugada
	validaJugada(letra);
}
