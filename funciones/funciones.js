
document.getElementById('empezar').onclick = function(){
    console.log("Efectivamente hiciste click en empezar");
    document.getElementById('ejemplo_de_cv').style.display = 'none';
    document.getElementById('div_reestablecer').style.display = 'flex';
    document.getElementById('div_empezar').style.display = 'none';
    document.getElementById('div_submit').style.display = 'flex';
    document.getElementById('formulario').style.display = 'flex';

}


document.getElementById('reestablecer').onclick = function(){
    console.log("Efectivamente hiciste click en reestablecer");
    window.location.reload();

}

document.getElementById('submit').onclick = function(){
    console.log("Efectivamente hiciste click en submit");
    document.getElementById('ejemplo_de_cv').style.display = 'block';
    document.getElementById('div_reestablecer').style.display = 'none';
    document.getElementById('div_empezar').style.display = 'flex';
    document.getElementById('div_submit').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
    cambiarTodo();

}

function cambiarTodo(){
    //cambiar nombre
    var nombre = document.getElementById("nombre_input").value;
    document.getElementById("nombre_ejemplo").innerHTML = nombre;

    //cambiar email
    var email = document.getElementById("email_input").value;
    document.getElementById("e-mail").innerHTML = "E-mail: "+email;

    //cambiar numero de telefono
    var numero_telefono = document.getElementById("num_cel_input").value;
    document.getElementById("numero").innerHTML = "Número celular: "+numero_telefono;


}
















window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });