function Verificar() {

    if (document.getElementById('email_titular').value == "") {
        document.getElementById("estado").innerHTML = colorTexto = "El campo E-Mail es obligatorio".fontcolor("red");
    }
    else {
        if (document.getElementById('nombre').value == "") {
            document.getElementById("estado").innerHTML = colorTexto = "El campo nombre es obligatorio".fontcolor("red");
        }
        else {
            if (document.getElementById('mensaje').value == "") {
                document.getElementById("estado").innerHTML = colorTexto = "El campo mensaje es obligatorio".fontcolor("red");
            }

            else {
                document.getElementById("estado").innerHTML = colorTexto = "Mensaje Enviado.!".fontcolor("green");
            }
        }

    }






}

