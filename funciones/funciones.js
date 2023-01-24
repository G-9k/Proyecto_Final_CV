
document.getElementById('empezar').onclick = function(){
    console.log("Efectivamente hiciste click en empezar");
    document.getElementById('ejemplo_de_cv').style.display = 'none';
    document.getElementById('div_reestablecer').style.display = 'flex';
    document.getElementById('div_empezar').style.display = 'none';
    document.getElementById('div_submit').style.display = 'flex';
    document.getElementById('div_limpiar').style.display = 'flex';
    document.getElementById('formulario').style.display = 'flex';

}


document.getElementById('reestablecer').onclick = function(){
    console.log("Efectivamente hiciste click en reestablecer");
    window.location.reload();

}


document.getElementById('limpiar').onclick = function(){
    console.log("Efectivamente hiciste click en limpiar");
    const collection = document.getElementsByClassName("input");
    for (let i = 0; i < collection.length; i++) {
      collection[i].value = "";
    }
}

document.getElementById('submit').onclick = function(){
    console.log("Efectivamente hiciste click en submit");
    document.getElementById('ejemplo_de_cv').style.display = 'block';
    document.getElementById('div_reestablecer').style.display = 'none';
    document.getElementById('div_empezar').style.display = 'flex';
    document.getElementById('div_submit').style.display = 'none';
    document.getElementById('div_limpiar').style.display = 'none';
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

    //cambiar dirección
    var dirección = document.getElementById("dirección_input").value;
    document.getElementById("dirección").innerHTML = "Dirección: "+dirección;

    //cambiar formación academica
    var form_acad1 = document.getElementById("form_acad_input1").value;
    document.getElementById("texto_for_acad1").innerHTML = form_acad1;

    var form_acad2 = document.getElementById("form_acad_input2").value;
    document.getElementById("texto_for_acad2").innerHTML = form_acad2;

    //cambiar idiomas
    var idioma1 = document.getElementById("idiomas_input1").value;
    document.getElementById("texto_idiomas1").innerHTML = idioma1;

    var idioma2 = document.getElementById("idiomas_input2").value;
    document.getElementById("texto_idiomas2").innerHTML = idioma2;

    var idioma3 = document.getElementById("idiomas_input3").value;
    document.getElementById("texto_idiomas3").innerHTML = idioma3;

    //cambiar pasatiempos
    var pasatiempos = document.getElementById("pasatiempos_input").value;
    document.getElementById("texto_pasatiempos").innerHTML = pasatiempos;

    //cambiar fecha de nacimiento
    var fecha_nac = document.getElementById("fecha_nac_input").value;
    document.getElementById("fecha_nacimiento").innerHTML = "Fecha de nacimiento: "+fecha_nac;

    //cambiar nacionalidad
    var nacionalidad = document.getElementById("nacionalidad_input").value;
    document.getElementById("nacionalidad").innerHTML = "Nacionalidad: "+nacionalidad;

    //cambiar experiencias laborales
    var exp_lab1 = document.getElementById("exp_lab_input1").value;
    document.getElementById("texto_exp_laboral1").innerHTML = exp_lab1;

    var exp_lab2 = document.getElementById("exp_lab_input2").value;
    document.getElementById("texto_exp_laboral2").innerHTML = exp_lab2;

    var exp_lab3 = document.getElementById("exp_lab_input3").value;
    document.getElementById("texto_exp_laboral3").innerHTML = exp_lab3;

    //cambiar logros personales
    var logros1 = document.getElementById("log_per_input1").value;
    document.getElementById("texto_logros1").innerHTML = logros1;

    var logros2 = document.getElementById("log_per_input2").value;
    document.getElementById("texto_logros2").innerHTML = logros2;

    var logros3 = document.getElementById("log_per_input3").value;
    document.getElementById("texto_logros3").innerHTML = logros3;

    //cambiar capacidades
    var cap1 = document.getElementById("cap_input1").value;
    document.getElementById("texto_cap1").innerHTML = cap1;

    var cap2 = document.getElementById("cap_input2").value;
    document.getElementById("texto_cap2").innerHTML = cap2;
    
    var cap3 = document.getElementById("cap_input3").value;
    document.getElementById("texto_cap3").innerHTML = cap3;

    var cap4 = document.getElementById("cap_input4").value;
    document.getElementById("texto_cap4").innerHTML = cap4;

    var cap5 = document.getElementById("cap_input5").value;
    document.getElementById("texto_cap5").innerHTML = cap5;
    
}




window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });


document.getElementById('mas_form_acad').onclick = function(){
    document.getElementById('form_acad_input2').style.display = 'block';
    document.getElementById('mas_form_acad').style.display = 'none';
    document.getElementById('menos_form_acad').style.display = 'block';
}

document.getElementById('menos_form_acad').onclick = function(){
    document.getElementById('form_acad_input2').style.display = 'none';
    document.getElementById('mas_form_acad').style.display = 'block';
    document.getElementById('menos_form_acad').style.display = 'none';
}

document.getElementById('mas_idiomas1').onclick = function(){
    document.getElementById('idiomas_input2').style.display = 'block';
    document.getElementById('mas_idiomas1').style.display = 'none';
    document.getElementById('mas_idiomas2').style.display = 'block';
    document.getElementById('menos_idiomas1').style.display = 'block';
}

