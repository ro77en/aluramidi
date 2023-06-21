function tocaSom (idAudioElement) {
    document.querySelector(idAudioElement).play(idAudioElement);
}

const listaDeTeclas = document.querySelectorAll('.tecla');


<<<<<<< HEAD



for (let index = 0; index < listaDeTeclas.length; index++) {
=======
/*
let index = 0;
while (index < listaDeTeclas.length) {
>>>>>>> 5d3717ac7d2c08e5b8bd7d8639cb1680680c3f15

    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
<<<<<<< HEAD
}
=======

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
>>>>>>> 5d3717ac7d2c08e5b8bd7d8639cb1680680c3f15
