function tocaSom (idAudioElement) {
    document.querySelector(idAudioElement).play(idAudioElement);
}

const listaDeTeclas = document.querySelectorAll('.tecla');





for (let index = 0; index < listaDeTeclas.length; index++) {

    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}