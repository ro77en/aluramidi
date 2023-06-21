function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('[ERROR] Elemento não encontrado');
    } else if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
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
