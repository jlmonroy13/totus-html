var imagen1 = "./static/images/publi1.jpg";
var imagen2 = "./static/images/publi2.jpg";
var imagen3 = "./static/images/publi3.jpg";
var empty = document.getElementById("dotsjs");
var div = document.getElementsByClassName("carouseljs")[0];

var imagenes = [imagen1, imagen2, imagen3];

var position = 0;


function cambiarImagen() {
    var images = document.createElement("IMG");
    images.setAttribute("src", imagenes[position]);
    images.setAttribute("alt", "");
    images.classList.add("carousel__image");
    images.setAttribute( "id", "carousel__imagejs");
    div.appendChild(images);
}
cambiarImagen();

function cambiarImagenRight() {
    if (position >= imagenes.length - 1) {
        position = 0;
        div.innerHTML = '';
        cambiarImagen();
    } else {
        position = position + 1;
        div.innerHTML = '';
        cambiarImagen();
    }
}

function cambiarImagenLeft() {
    if (position === 0) {
        position = imagenes.length - 1;
        div.innerHTML = '';
        cambiarImagen();
    } else {
        position = position - 1;
        var image = document.getElementById("carousel__imagejs");
        div.innerHTML = '';
        cambiarImagen();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {  
        cambiarImagenRight();
    }, 3000);
});
