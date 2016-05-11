var iniciaApp =function()
{
	var validaEntrada = function()
	{
		//Invalida los eventos que no corresponden a esta función.
		event.preventDefault();
		var usuario	=$("#txtUsuario").val();
		var clave	=$("#txtClave").val();
		//Validaciones

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
			if(usuario=="pw" && clave=="1234")
			{
				alert("Bienvenido "+usuario);
				//Dar entrada al usuario
				$("#datosUsuario").hide();//escondemos
				$("nav").show("slow");//mostramos
			}
			else
				alert("Usuario y/o contraseña incorrecta(s)");



		console.log("Se disparó el submit :(")
	}
	$("#frmValidaEntrada").on("submit",validaEntrada)
}
$(document).on("ready",iniciaApp);