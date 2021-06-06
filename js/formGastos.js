


//ingresar gastos
function FuncionIngresoGastos(){
    $('#moduloGastos').append(FormGasto)
    $('#IngresoGastos').attr("hidden",true)
    }
//obtner datos del form intento fallido
/*var gastos = [["gasto","detalle","rubro","fecha","monto","medio de pago"]]
$('#IngresoGastos').click(function(event){
    //event.preventDefault();
    var gasto = gastos.length;
    var detalle = $(this).find('input[id="detalleGasto"]').val();
    var rubro = $(this).find('input[id="rubroGasto"]').val();
    var fecha = $(this).find('input[id="fechaGasto"]').val();
    var monto = $(this).find('input[id="montoGasto"]').val();
    var mdp = $(this).find('input[id="mdpGasto"]').val();
    gastos.push([gasto, detalle, rubro, fecha, monto, mdp])
    localStorage.setItem('Gastos', JSON.stringify(gastos));   
});
*/
//obtner datos del form

function Cargar() {
    var gasto = gastos.length;
    var detalle = $('#formGastos').find('input[id="detalleGasto"]').val();
    var rubro = $('#formGastos').find('input[id="rubroGasto"]').val();
    var fecha = $('#formGastos').find('input[id="fechaGasto"]').val();
    var monto = $('#formGastos').find('input[id="montoGasto"]').val();
    var mdp = $('#formGastos').find('input[id="mdpGasto"]').val();
    gastos.push([gasto, detalle, rubro, fecha, monto, mdp])
    localStorage.setItem('Gastos', JSON.stringify(gastos));   
}

var FormGasto = `
<div id = "gastosnuevo">
                <div class="card mb-4" id="forms">
                  <div class="card-header">Ingreso de Gastos</div>
                  <div class="card-body">
                    <form id = "formGastos">
                      <fieldset>
                        <div class="form-group">
                          <label for="detalleGasto">Detalle</label>
                          <input class="form-control" id="detalleGasto" type="text" placeholder="Por ejemplo nafta" value ="">
                        </div>
                        <div class="form-group">
                          <label for="rubroGasto">Rubro</label>
                          <input class="form-control" id="rubroGasto" type="text" placeholder="Por ejemplo Movilidad">
                        </div>
                        <div class="form-group">
                          <label for="fechaGasto">Fecha</label>
                          <input class="form-control" id="fechaGasto" type="date">
                        </div>
                        <div class="form-group"> 
                          <label for="montoGasto">Monto en ARS</label>
                          <input class="form-control" id="montoGasto" type="number">
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

                        
                        <button id = "prueba" class="btn btn-outline-primary" onclick= Cargar() >Cargar y Continuar </button>
                        <div></br></div>
                        <button class="btn btn-outline-primary" type="submit">Cargar y Finalizar</button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
                  
              </div> `