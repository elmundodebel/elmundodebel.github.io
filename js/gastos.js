
//obtengo el json guardado
function variableGuardada(e){
    return JSON.parse(localStorage.getItem(e))
}
// funcion creo el item gastos en local storage
function creoLocalStorageGastos(){
  var encabezado = [["gasto","detalle","rubro","fecha","monto","medio de pago"]]
  if (localStorage.getItem('Gastos') == null){
  localStorage.setItem('Gastos', JSON.stringify(encabezado));
}}

//funcion para aparecer formulario de gastos

function FuncionIngresoGastos(){
    creoLocalStorageGastos();
    $('#tablaDeGastos').remove();
    $('#gastosnuevo').remove();
    $('#moduloGastos').append(FormGasto);
    }


//formulario para ingresar gastos
var FormGasto = `
<div id = "gastosnuevo">
                <div class="card mb-4" id="forms">
                  <div class="card-header">Ingreso de Gastos</div>
                  <div class="card-body">
                    <form id = "formGastos">
                      <fieldset>
                        <div class="form-group">
                          <label for="detalleGasto">Detalle</label>
                          <input class="form-control" id="detalleGasto" type="text" placeholder="Por ejemplo nafta" value ="" required >
                        </div>
                        <div class="form-group">
                          <label for="rubroGasto">Rubro</label>
                          <input class="form-control" id="rubroGasto" type="text" placeholder="Por ejemplo Movilidad">
                        </div>
                        <div class="form-group">
                          <label for="fechaGasto">Fecha</label>
                          <input class="form-control" id="fechaGasto" type="date" required>
                        </div>
                        <div class="form-group"> 
                          <label for="montoGasto">Monto en ARS</label>
                          <input class="form-control" id="montoGasto" type="number" required >
                        </div>
                        <div class="form-group"> 
                          <label for="mdpGasto">Medio de pago</label>
                          <input class="form-control" id="mdpGasto" type="text" placeholder="Efectivo/Debito/Credito">
                        </div>
                        <div class="form-group">
                        </div>
                        <div class="form-group">
                          <label for="ticketGasto">Ticket</label>
                          <input class="form-control" text= "ticket" id="ticketGasto" type="file" accept="image/*" multiple >
                        </div>
                        <input type="button" id = "prueba" class="btn btn-outline-primary" onclick= "Cargar();" Value ="Cargar y Continuar"></input>
                        <div></br></div>
                        <input type="button" class="btn btn-outline-primary" onclick= "Cargar();ResumenGastos();" Value ="Cargar y Finalizar"></input>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
                  
              </div> `


//funcion para guardar gastos de formulario
function Cargar() {
  $('#tablaDeGastos').remove();
  gastos = variableGuardada('Gastos');
  var id_gasto = gastos.length - 1 + 1;
  var detalle = $('#formGastos').find('input[id="detalleGasto"]').val();
  var rubro = $('#formGastos').find('input[id="rubroGasto"]').val();
  var fecha = $('#formGastos').find('input[id="fechaGasto"]').val();
  var monto = $('#formGastos').find('input[id="montoGasto"]').val();
  var mdp = $('#formGastos').find('input[id="mdpGasto"]').val();
  gastos.push([id_gasto, detalle, rubro, fecha, monto, mdp])
  localStorage.setItem('Gastos', JSON.stringify(gastos));   
}

// funcion para quitar gastos
const textoGastoAQuitar = 'Ingresa el numero de gasto a quitar'
const noExisteElGasto = 'No existe el gasto a quitar'
function FuncionQuitarGastos(){
  creoLocalStorageGastos();
  ResumenGastos();
  gastos = variableGuardada('Gastos');
  if (gastos.length > 1){
  var idGastoAQuitar = prompt(textoGastoAQuitar);
  var aborrar = (element) => element[0] == idGastoAQuitar;
  var elementoABorrar = gastos.findIndex(aborrar)
  if (elementoABorrar >=0 ){
    var DetalleGastoAQuitar = 'Gastos a Quitar ' + gastos[elementoABorrar];
  alert(DetalleGastoAQuitar);
  gastos.splice(elementoABorrar,1);}
  else {alert (noExisteElGasto)};
  localStorage.setItem('Gastos', JSON.stringify(gastos));
  }
  ResumenGastos();
}

// crea tabla de resumen de gastos
function ResumenGastos() {
  creoLocalStorageGastos();
  var datosTabla = variableGuardada('Gastos');
  if (datosTabla.length >1){
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
  $('#gastosnuevo').remove()
  $('#tablaDeGastos').remove()
  $("#moduloGastos").append(tabla);
  }
  //$("#tablaDeGastos").hide()
  //$("#tablaDeGastos").show('slow')
  else alert('No hay gastos ingresados')
  
}

