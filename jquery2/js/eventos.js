var iniciaApp =function()
{
	var validaEntrada = function()
	{
		var usuario	=$("#txtUsuario").val();
		var clave	=$("#txtClave").val();
		//Validaciones

			//1-.Que no sean vacios
			if(usuarios =="")
			{
				alert("El usuario no debe ser vacío")
				("#txtUsuario").focus();
			}
				
			if(clave =="")
			{
				alert("La clave no debe ser vacía")
				("#txtClave").focus();
			}
		console.log("Se disparó el submit :(")
	}
	$("#frmValidaEntrada").on("submit",validaEntrada)
}
$(document).on("ready",iniciaApp);