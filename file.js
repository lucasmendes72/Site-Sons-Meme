function tocaSom(idElementoDeAudio) {
	document.querySelector(idElementoDeAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i = 0; i < listaDeTeclas.length; i++) {
	const tecla = listaDeTeclas[i];

	const som = tecla.classList[1];

	const idAudio = `#som_${som}`;

	tecla.onclick = function () {
		tocaSom(idAudio);
	}
}
