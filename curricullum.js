// BOTON CAMBIAR ESTILO


document.getElementById("boton").onclick=() => {
    console.log("capturar evento");
    document.getElementById("demo").innerHTML="Si presionas el botón reset, la pagina vueve a su estado anterior."
    document.getElementById("sobre-mi").style.background = "#0E5CBC ";
   
}


// BOTON RESET


document.getElementById("boton-reset").onclick=() => {
    console.log("capturar evento se presiono boton reset");
    document.getElementById("demo").innerHTML="          "
    document.getElementById("sobre-mi").style.background = "#060000";
   
}


// BOTON VER 


document.getElementById("boton_ver").addEventListener("click", function () {

   
    let elemento1=document.createElement("a");
    
   
    document.getElementById("agregar").appendChild(elemento1);

    elemento1.href="imagenes/Curriculum_vitae_Pablo_Mondino_De_La_Rossa_febrero2023 (2)";
    elemento1.target="_blank";
    elemento1.click();
 
})




// BOTON DESCARGAR


document.getElementById("boton_descarga").addEventListener("click", function () {

    
    let elemento1=document.createElement("a");
    
    document.getElementById("agregar").appendChild(elemento1);

    elemento1.href="imagenes/Curriculum_vitae_Pablo_Mondino_De_La_Rossa_febrero2023 (2)";
    elemento1.target="_blank";
    elemento1.download= "imagenes/Curriculum_vitae_Pablo_Mondino_De_La_Rossa_febrero2023 (2)";
    elemento1.click();
  
})

