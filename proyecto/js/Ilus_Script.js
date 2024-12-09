function showDiv(divId) {
    const divs = document.querySelectorAll('.Ilus-seccion, .mode-seccion, .prod-seccion, .vide-seccion');
    divs.forEach(div => div.style.display = 'none');

    const selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.style.display = 'block';
    }
}


function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxmod = document.getElementById("lightbox-mod");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxImgmod = document.getElementById("lightbox-imgmod");

    lightboxImg.src = image.src;
    lightbox.style.display = "flex";

    lightboxmod.style.display = "flex"; 
    lightboxImgmod.src = image.src; 
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; 
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = ""; 

    const lightboxmod = document.getElementById("lightbox-mod");
    lightboxmod.style.display = "none"; 
    const lightboxImgmod = document.getElementById("lightbox-imgmod");
    lightboxImgmod.src = "";
}



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.error('Error al registrar el Service Worker:', err));
  }

  