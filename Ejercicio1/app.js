var fecha = new Date();
var hora = fecha.getHours();

if (hora >= 6 && hora < 12) {
  alert("Buenos dias!!");
} else if (hora >= 12 && hora < 20) {
  alert("Buenas tardes!!");
} else {
  alert("Buenas noches!!");
}
