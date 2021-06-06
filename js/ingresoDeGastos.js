//const bienvenida = alert('Bienvenido al Simulador de ingreso de gastos')
const textoPrimerGasto = 'Tienes algun gasto que declarar?\nEn caso negativo ingresa 0'
const textoMasDeUnGasto = 'Tienes algun gasto más que declarar?\nEn caso negativo ingresa 0'
const textoGastoAQuitar = 'Ingresa el numero de gasto a quitar'
const despedida = 'Excelente!\nRecuerda que puedes volver a ingresar cuantas veces lo necesites'
const noHayMasGastos = 'Se ha finalizado la carga de gastos'
const noExisteElGasto = 'No existe el gasto a quitar'

var montoAcumulado = 0
var gastosIngresados = ''
var gastos = [["gasto","detalle","rubro","fecha","monto","medio de pago"]]



function FuncionIngresoGastos2(){
  var condicion = prompt(textoPrimerGasto);
  
while (condicion != 0){
      var gasto = gastos.length;
      detalle = prompt('ingresa el detalle del gasto '+gasto) ;
      rubro = prompt('ingresa el rubro del gasto '+gasto) ;
      fecha = prompt('ingresa la fecha en la cual hiciste el gasto '+gasto+' en formato YYYY/MM/DD');
      monto = prompt('ingresa el monto del gasto '+gasto );
      mdp = prompt('ingresa el medio de pago que utilizaste para el gasto '+gasto );
      nuevoGasto = ('Nuevo Gasto: Nro '+ gasto +': '+ detalle +' - $'+ monto +' - '+ fecha+' \n');
      gastosIngresados += nuevoGasto;
      console.log(nuevoGasto);
      gastos.push([gasto, detalle, rubro, fecha, monto, mdp]);
      condicion = prompt(textoMasDeUnGasto);
      montoAcumulado += parseFloat(monto);
      var gasto = gastos.length+1;
      sessionStorage.setItem('ListadoGastosLocal', JSON.stringify(gastos));
      continue;
    }
  alert(despedida);
  borrarTabla();
  crearTabla(gastos);
    document.getElementById("IngresoGastos").innerText = "Ingresar más gastos";
}


// quitar gastos
function FuncionQuitarGastos(){
  if (gastos.length > 1){
  var idGastoAQuitar = prompt(textoGastoAQuitar);
  var aborrar = (element) => element[0] == idGastoAQuitar;
  var elementoABorrar = gastos.findIndex(aborrar)
  if (elementoABorrar >=0 ){
    var DetalleGastoAQuitar = 'Gastos a Quitar ' + gastos[elementoABorrar];
  alert(DetalleGastoAQuitar);
  gastos.splice(elementoABorrar,1);}
  else {alert (noExisteElGasto)};
  //crearParrafo('Gasto Quitado: '+ DetalleGastoAQuitar);
  sessionStorage.setItem('ListadoGastosLocal', JSON.stringify(gastos));
  //gastos.forEach(element => console.log('Gasto ' + element[0] + ': ' + element[1]+ ' - $' + element[2]+ ' - ' + element[3]));
  borrarTabla();
  crearTabla(gastos);
  }
  else alert('No hay gastos ingresados')
}

// crea tabla con gastos
function crearTabla(datosTabla) {
  var tabla = document.createElement('table');
  tabla.setAttribute("id","tablaDeGastos")
  tabla.setAttribute("class","table table-hover")
  var cuerpoTabla = document.createElement('tbody');

  datosTabla.forEach(function(datosFilas) {
    var fila = document.createElement('tr');

    datosFilas.forEach(function(datosCeldas) {
      var celda = document.createElement('td');
      celda.appendChild(document.createTextNode(datosCeldas));
      fila.appendChild(celda);
    });

    cuerpoTabla.appendChild(fila);
  });

  tabla.appendChild(cuerpoTabla);
  document.getElementById("moduloGastos").appendChild(tabla);
  $("#tablaDeGastos").hide()
  $("#tablaDeGastos").show('slow')
}




// borra tabla con gastos
function borrarTabla(){
  if (!!document.getElementById("tablaDeGastos") == true) {
  var tablaABorrar = document.getElementById("tablaDeGastos")
  var padre = document.getElementById("moduloGastos")
  padre.removeChild(tablaABorrar)}
}
