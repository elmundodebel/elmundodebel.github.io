$(document).ready(function () {
    // Handler for .ready() called.
    $.getJSON("./data/cotizaciones.json", function (data) {
      var tabla = [`
        <tr>
            <th id='dia'>                    Día            </td>
            <th id='cotiOficialVenta'>       Oficial Venta  </th>
            <th id='cotiOficialCompra'>      Oficial Compra </th>
            <th id='cotiBlueVenta'>          Blue Venta     </th>
            <th id='cotiBlueCompra'>         Blue Compra    </th>
        </tr>  
        `];
  
      $.each(data, function (index, element) {
        let lista = `
        <tr>
            <td id='${index}-dia'>                    ${element.dia}                        </td>
            <td id='${index}-cotiOficialVenta'>       ${element.cotiOficialVenta}           </td>
            <td id='${index}-cotiOficialCompra'>      ${element.cotiOficialCompra}          </td>
            <td id='${index}-cotiBlueVenta'>          ${element.cotiBlueVenta}              </td>
            <td id='${index}-cotiBlueCompra'>         ${element.cotiBlueCompra}             </td>
        </tr>
        `;
  
        tabla.push(lista);
      });
  
      let Atributos = {
        class: "table table-striped table-bordered table-condensed",
        html: tabla,
        id: "tablaCoto",
        tittle: "Tabla de cotizaciones",
        style: "text-align:center",
        //align-content: "center",        
      };
      
      $("#cotizacion").append($("<table/>", Atributos))
    });
  });