function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('[ERROR] Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTeclas.length; index++) {

    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space")
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
