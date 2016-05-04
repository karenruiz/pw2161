//jquery(etiquetas,clases,id)
//$alias (un sobrenombre)
//$==jquery

var inicio = function()
{
	var clicBoton = function()
	{
		console.log("Clic del botón");
		//$("$.anuncioWeb").html("Clic del botón");
		$("$.anuncioWeb").append("Clic del botón");
	}

	var clicBoton2 = function()
	{
		$.ajax({
			beforeSend:function(){
				console.log("Espere...");
			},
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success:function(data){
				console.log(data);
				//alert(data.results[0].gender);
				//alert(data.results[0].name.first+" "+data.results[0].name.last);

				//Mostramos la información en el HTML
				$("#fotoPersona").attr("src",data.results[0].picture.medium);
				$("#txtNombreUser").html(data.results[0].name.first);
				$("#txtApellidoUser").html(data.results[0].name.last);
			},
			error:function(xhr,error,throws){
				console.log("Ocurrio un error");
			}
		});
	}

	var teclaUnInput = function(tecla)
	{
		if(tecla.which==13)
		{
			//Que se posicione en otro punto
			$("#otroInput").focus();
		}
	}

	//Preparar los eventos de todos mis objetos
	$("#miBoton").off("click", clicBoton);
	$("#miBoton").on("click", clicBoton2);
	$("#unInput").on("keypress", teclaUnInput);


}

//Main
$(document).on("ready", inicio);