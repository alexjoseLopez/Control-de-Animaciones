const character = document.getElementById("personaje");
const walkButton = document.getElementById("caminar");
const backButton = document.getElementById("retroceder");
const autowaklbutton = document.getElementById("caminarauto");
const autoreturnwakbutton = document.getElementById("retrocederauto");
const stopwalkingbutton = document.getElementById("para");
let imageIndex = 1; //indice de la imagen actual del personaje
const totalImages = 5; //numero total de imagenes de caminar
let positionX = 0; //posicion horizontal inincial del personaje
const stepSize = 25; //tamaño del paso de desplazamiento
let walkingInterval; //variable para almacenar el intervalo de caminar 

function caminar () {
    //cambia la src de la imagen del personaje para simular la animacion de 
    character.src = `imagenes/personaje_${imageIndex}.png`;
    //cambiar la posicion de la imagenes
    character.style.transform = 'scaleX(1)';
    positionX += stepSize;
    character.style.left = `${positionX}px`; //asignacion de posicion letf a imagen
    imageIndex ++;

    if (imageIndex > totalImages){
        imageIndex = 1;}
    
}

walkButton.addEventListener('click', caminar)

function autocaminar (){
    if (!walkingInterval){
        walkingInterval = setInterval(caminar,100)
    }
}

autowaklbutton.addEventListener('click', autocaminar);