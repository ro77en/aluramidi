function tocaSom (idAudioElement) {
    document.querySelector(idAudioElement).play(idAudioElement);
}

const listaDeTeclas = document.querySelectorAll('.tecla');


/*
let index = 0;
while (index < listaDeTeclas.length) {

    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    index ++;

    console.log(index);
}
*/

let index = 0;
for (let key in listaDeTeclas) {
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    index ++;

    console.log(index);
}
