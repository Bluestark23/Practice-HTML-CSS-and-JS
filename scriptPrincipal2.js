$(document).on("ready",configurarApp);//cuando el documento ete listo llamara a la funcion confgurarApp

function configurarApp(){
//body...
//cambia el tamaño al lienzo
var canvas=document.getElementById("miCanvas");//se envia el elemento con el id=miCanvas
var ctx=canvas.getContext("2d");//contexto,nos sirve para poder dibujar en 2d
canvas.width=screen.availWidth;//para ajustar se al ancho del tamaño del navegador
dibujaFooter(canvas,ctx);
}

function dibujaFooter(canvas,contexto){//dibuja el pie,recibe dos datos que son los iniciales
contexto.fillStyle="rgba(0,0,0,0.8)"//propiedad rgba,fillstyle permite cambiar el relleno con el que canvas dibuja
contexto.moveTo(0,0);//sele indica al compilador de donde va a comenzar a dibujar
contexto.quadraticCurveTo(0,-50,canvas.width-100,canvas.height-50);//permite crear curvas
//quadraticCurveTo(cpx,cpy,x,y);,los primeros los que controlan la curva y los dos ultimos hasta donde termina 

contexto.fill();//permite meter una linea recta stroke,fill nos permite rellenar una figuar 
}
