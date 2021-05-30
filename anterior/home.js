/* Bienvenida */
var welcome = (bienvenida) => {registrado = prompt(bienvenida); return(registrado)};

welcome('Bienvenido! Nos alegramos que estes por acá.\n¿Ya estás registrado? \nContestar si o no por favor')


/*Solicitud de datos para registro*/
if (registrado.toLowerCase().trim() == 'no'){
        var datosSolicitados = ['nombre', 'apellido', 'email', 'telefono', 'edad','estado civil'];
        var respuestas = [];
        var datosRepondidos = [];
        var totalDatosSolicitados = datosSolicitados.length;

        function solicitudDatos (){    
            var datoASolicitar = 0;
            while (totalDatosSolicitados > 0) {
            var respuesta = prompt('Te solicitamos tu '+ datosSolicitados[datoASolicitar])
            respuestas.push([datosSolicitados[datoASolicitar],respuesta])
            datoASolicitar++
            totalDatosSolicitados--
        }
        };
        solicitudDatos();

        /*Objeto Usuario */
        var datosUsuario = {
            dato1 : respuestas[0],
            dato2 : respuestas[1],
            dato3 : respuestas[2],
            dato4 : respuestas[3],
            dato4 : respuestas[4],
            dato4 : respuestas[5],
            resumen: function(){alert('Los datos que ingresaste fueron:\n'+respuestas[0][0]+': '+respuestas[0][1]+
                                        '\n'+respuestas[1][0]+': '+respuestas[1][1]+
                                        '\n'+respuestas[2][0]+': '+respuestas[2][1]+
                                        '\n'+respuestas[3][0]+': '+respuestas[3][1]+
                                        '\n'+respuestas[4][0]+': '+respuestas[4][1]+
                                        '\n'+respuestas[5][0]+': '+respuestas[5][1]                                  
                                        )},
            resumen2: function(){console.log(this.dato1 +'|'+ this.dato2 +'|'+ this.dato3 +'|'+ this.dato4)}
        }

        datosUsuario.resumen();
        datosUsuario.resumen2()
    }
