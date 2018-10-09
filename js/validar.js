function validarFormulario(){
    
    var nombre, correo, telefono, organizacion, mensaje
    nombre = document.getElementById("nom").value
    correo = document.getElementById("cor").value
    telefono = document.getElementById("fon").value
    organizacion = document.getElementById("org").value
    mensaje = document.getElementById("mes").value

    if(nombre == "" || correo == "" || mensaje == ""){
        alert("the fields name, mail and message are obligatory")
        return false
    }
    
    
    if(telefono <10000000 || telefono >99999999){    
        alert("The cell phone number needs 8 digits.")
        return false  
    } 

    if(mensaje.lengt > 200){
        alert("Max length of the message is 200 characters")
    }
    
}