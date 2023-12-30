var elemento = document.getElementById("reloj");

//Cambiamos los valores obtenidos de diasemana y mes por nombres con estas funciones
function nombreDiaSemana(dia) {
  const diaSemana = [
    "domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  return diaSemana[dia];
}

function nombreMes(mes) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return meses[mes];
}

function reloj() {
  const fecha = new Date();

  const dia = fecha.getDay();
  const diaMes = fecha.getDate();
  const mes = fecha.getMonth();
  const anno = fecha.getFullYear();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();

  elemento.innerHTML = `Hoy es ${nombreDiaSemana(
    dia
  )}, ${diaMes} de ${nombreMes(
    mes
  )} de ${anno} y son las ${hora}:${minutos}:${segundos} horas.`;

  setTimeout(reloj, 1000);
}

reloj();
