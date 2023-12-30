var elemento = document.getElementById("fecha");

var fecha= new Date();

//obtenemos los elementos de la fecha

const dia = fecha.getDay();

const diaMes = fecha.getDate();
const mes = fecha.getMonth();

const anno = fecha.getFullYear();

const hora= fecha.getHours();
const minutos= fecha.getMinutes();

//Cambiamos los valores obtenidos de diasemana y mes por nombres con estas funciones
function nombreDiaSemana(dia){
    const diaSemana= ['domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
    return diaSemana[dia];
}

function nombreMes(mes){
    const meses= ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[mes];
}


//imprimimos en el html
elemento.innerHTML=`Hoy es ${nombreDiaSemana(dia)}, ${diaMes} de ${nombreMes(mes)} de ${anno} y son las ${hora}:${minutos} horas.`