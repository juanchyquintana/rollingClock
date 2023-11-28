const mostrarHora = () => {
  const fecha = new Date()
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let dia;
  
  const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const fechaCompleta = fecha.toLocaleDateString('es-AR', opciones)
  
  hora = hora < 10 ? "0" + hora : hora;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;
  dia = hora <= 12 ? "AM" : "PM" 
  
  let formatearFecha = hora + ":" + minutos + ":" + segundos + " " + dia;
  const seccionReloj = document.querySelector('#relojSection')
  seccionReloj.innerHTML = formatearFecha;

  const fechaHoy = fechaCompleta
  const fechaEscrita = document.querySelector('#fechaEscrita')
  fechaEscrita.innerHTML = fechaHoy
}

setInterval(mostrarHora, 1000)