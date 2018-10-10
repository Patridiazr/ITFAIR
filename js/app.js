if ( ! Modernizr.adownload ) {
    var $link = $('a');
   
      $link.each(function() {
          var $download = $(this).attr('download');
       
          if (typeof $download !== typeof undefined && $download !== false) {
        var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"');
        $el.insertAfter($(this));
          }
   
      });
}

function valContacUs(){
    
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
        return false
    }
    
}
function valSingUp(){
    var nombre, nacionalidad, correo, contrasena, contrasena2
    nombre = document.getElementById("nom") .value
    nacionalidad = document.getElementById("nac").value
    correo = document.getElementById("ema").value
    contrasena = document.getElementById("pas").value
    contrasena2 = document.getElementById("pas2").value

    if(nombre == "" || correo == "" || contrasena == "" || nacionalidad == ""){
        alert("All the fields are obligatory")
        return false
    }

    if(contrasena != contrasena2){
        alert("Passwords do not match")
        return false
    }

}

function valSelect(obj){
    var value
    value = obj.value    
    console.log(value)
    if(value == 3 || value == "3" || value == "d"){
             
        document.getElementById("nac").prop.disabled = false 
    }
}

