//Pirámide en funcionamiento en la página
function devolucionPiramide(number){
   let i;
   let j;
   for (i = 1; i <= number; i++ ){
   if(i === 1){
    document.write(i);
    document.write("<br>");
   }
   else{
    
    for(j = 1; j <= i; j++){
        document.write(j);
    }
    document.write("<br>");
   }
   }
}

devolucionPiramide(6);
document.write("<br>");
devolucionPiramide(3);


//Este código es el mismo que el anterior con funcionalidad, solo que este es en consola,
//Aqui lo que no puede hacer es ponerlo en forma de pirámide;
/*function devolucionPiramide(number){
    let i;
    let j;
    for (i = 1; i <= number; i++ ){
    if(i === 1){
     console.log(i);
     console.log("\n");
    }
    else{
     
     for(j = 1; j <= i; j++){
        console.log(j);
     }
     console.log("\n");
    }
    }
 }
 
 devolucionPiramide(6);
 console.log("\n");
 devolucionPiramide(3);*/







