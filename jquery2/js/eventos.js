var iniciaApp =function()
{
	var validaEntrada = function()
	{
		//Invalida los eventos que no corresponden a esta función.
		event.preventDefault();
		var usuario	=$("#txtUsuario").val();
		var clave	=$("#txtClave").val();
		// ******Validaciones******

			//1-.Que no sean vacios
			if(usuario =="") 
			{
				alert("El usuario no debe ser vacío")
				("#txtUsuario").focus();
			}
				
			if(clave =="")
			{
				alert("La clave no debe ser vacía")
				("#txtClave").focus();
			}
			//2.-Verificar usuario y contraseña
			var parametros= "accion=validaEntrada"+
							"&usuario="+usuario+
							"&clave="+clave+
							"&id="+Math.random();
			$.ajax({
				beforeSend:function(){
					console.log("Validar al usuario");
				},
				cache: false,
				type: "POST",
				dataType:"json",
				url:"php/funciones.php",
				data: parametros,
				success: function(response){

				},
				error:function(xhr,ajaxOptionx,thronwError){
					console.log("Algo salió mal :s")
				}
			});

			// if(usuario=="pw" && clave=="1234")
			// {
			// 	alert("Bienvenido "+usuario);
			// 	//Dar entrada al usuario
			// 	$("#datosUsuario").hide();//escondemos
			// 	$("nav").show("slow");//mostramos
			// }
			// else
			// 	alert("Usuario y/o contraseña incorrecta(s)");

		console.log("Se disparó el submit :(")
	}
	$("#frmValidaEntrada").on("submit",validaEntrada)
}
$(document).on("ready",iniciaApp);