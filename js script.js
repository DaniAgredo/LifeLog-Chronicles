let menuVisible = false;

function mostrarOcultarMenu() {
	if (menuVisible) {
		document.getElementById('nav').classlist = '';
		menuVisible = false;
	} else {
		document.getElementById('nav').classList = 'responsive';
		menuVisible = true;
	}
}

function seleccionar() {
	document.getElementById('nav').classList = '';
	menuVisible = false;
}

window.onscroll = function () {
	efectoHabilidades();
};
document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();
	const btn = document.getElementById('sendButton');
	btn.innerHTML =
		'Sending... <i class="fa-solid fa-download"></i><span class="overlay"></span>';

	const serviceID = 'default_service'; // Verifica que sea correcto
	const templateID = 'template_qfs16pt'; // Verifica que sea correcto

	emailjs.sendForm(serviceID, templateID, this).then(
		() => {
			btn.innerHTML =
				'Send End <i class="fa-solid fa-download"></i><span class="overlay"></span>';
			alert('¡Enviado!');
		},
		(err) => {
			btn.innerHTML =
				'Send End <i class="fa-solid fa-download"></i><span class="overlay"></span>';
			alert(JSON.stringify(err));
		},
	);
});
