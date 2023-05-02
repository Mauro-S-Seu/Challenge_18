//todo .......... EJERCICIO 18 ..........

// Dada las revoluciones por minuto de un auto en un juego de carreras,
// indique si el conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. Sabiendo que:
// Si las RPM son menores a 1000 debe bajar
// Si las RPM están entre 1000 y 3000 debe mantener
// Si las RPM son más de 3000 debe subir

let rpm = prompt("Ingresar las r.p.m.: ")

if(rpm < 1000){
    alert("El vehículo debe bajar las r.p.m.");

} else if(rpm >= 1000 && rpm <= 3000){
    alert("El vehículo debe mantener la marcha.");

}else if (rpm > 3000){
    alert("El vehículo debe subir las r.p.m.");

}else if(rpm == 0){
    alert("El vehículo no está en marcha.");

}else{
    alert("Ingrese r.p.m. que sea válido");
}