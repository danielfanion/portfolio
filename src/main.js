const { doc } = require('prettier');

const data = [
	{
		titre: 'Cutting Code',
		lien: './pages/cuttingCode.html',
		type: 'web',
		competences: 'Spring, React, TailwindCSS',
		background_image: 'images/cuttingcode.jpg',
	},
	{
		titre: 'PortFolio',
		lien: './pages/portfolio.html',
		type: 'web',
		competences: 'HTML, CSS, JS',
		background_image: 'images/portfolio.jpg',
	},
	{
		titre: 'Jungle Battle',
		lien: './pages/jungleBattle.html',
		type: 'web',
		competences: 'JS, Node.JS, TypeScript',
		background_image: 'images/junglebattle.jpg',
	},
	{
		titre: 'Pizzeria API REST',
		lien: './pages/pizzeria.html',
		type: 'web',
		competences: 'JAVA, J2EE/JSP, SQL',
		background_image: 'images/pizzeria.jpg',
	},
	{
		titre: 'Algorithme de Classification',
		lien: './pages/classifieur.html',
		type: 'app',
		competences: 'JAVA ,GIT',
		background_image: 'images/classifieur.jpg',
	},
	{
		titre: 'Terminal Chess',
		lien: './pages/chess.html',
		type: 'app',
		competences: 'JAVA, GIT',
		background_image: 'images/chess.jpg',
	},
	{
		titre: 'Algorithme de Tutorat',
		lien: './pages/tutorat.html',
		type: 'appli',
		competences: 'JAVA, GIT',
		background_image: 'images/tutorat.jpg',
	},
	{
		titre: "Déploiement d'application",
		lien: './pages/matrix.html',
		type: 'autre',
		competences: 'Linux, Virtualisation, MarkDown',
		background_image: 'images/deploiement.jpg',
	},
	// {
	// 	titre: 'Site web (Entreprise fictive)',
	// 	lien: './pages/feelink.html',
	// 	type: 'web',
	// 	competences: 'HTML, CSS',
	// 	background_image: 'images/tmp.jpg',
	// },
	{
		titre: 'Création de logos',
		lien: './pages/logo.html',
		type: 'autre',
		competences: 'Illustrator, Photoshop',
		background_image: 'images/logo2.jpg',
	},
	// {
	// 	titre: 'Enigma',
	// 	lien: './pages/enigma.html',
	// 	type: 'appli',
	// 	competences: 'iJAVA',
	// 	background_image: 'images/tmp.jpg',
	// },
	// {
	// 	titre: 'Jungle Maudite',
	// 	lien: './pages/junglemaudite.html',
	// 	type: 'appli',
	// 	competences: 'iJAVA',
	// 	background_image: 'images/tmp.jpg',
	// },
];

function renderProject({ titre, lien, competences, background_image }) {
	return `<a href="${lien}">
				<img src="${background_image}" />
				<footer>
					<h3>${titre}</h3>
					<div class="infos">
						<span class="comp">${competences}</span>
					</div>
				</footer>
			</a>`;
}

let html = '';
data.forEach(name => (html += renderProject(name)));
document.querySelector('.results').innerHTML = html;

function onAllClick(event) {
	event.preventDefault(); // empêche le changement de page
	const filteredData = data;
	// Affichage
	let html = filteredData.reduce((str, game) => str + renderProject(game), '');
	document.querySelector('.results').innerHTML = html;
}
function onAppClick(event) {
	event.preventDefault(); // empêche le changement de page
	// Tri
	const filteredData = data.filter(project => project.type.search('app') != -1);
	// Affichage
	let html = filteredData.reduce((str, game) => str + renderProject(game), '');
	document.querySelector('.results').innerHTML = html;
}
function onWebClick(event) {
	event.preventDefault(); // empêche le changement de page
	// Tri
	const filteredData = data.filter(project => project.type.search('web') != -1);
	// Affichage
	let html = filteredData.reduce((str, game) => str + renderProject(game), '');
	document.querySelector('.results').innerHTML = html;
}

const buttonAll = document.querySelector('.all'),
	buttonWeb = document.querySelector('.web'),
	buttonApp = document.querySelector('.app');

buttonAll.addEventListener('click', onAllClick);
buttonApp.addEventListener('click', onAppClick);
buttonWeb.addEventListener('click', onWebClick);

const monHeader = document.querySelector('header');

function headerActive() {
	if (scrollY > 50) {
		monHeader.classList.add('active');
	} else {
		monHeader.classList.remove('active');
	}
}

window.addEventListener('scroll', headerActive);

const boutonTexte = document.querySelector('.boutonTexte');
const zoneTexte = document.querySelector('.texteProfil');
boutonTexte.innerHTML = '<i class="fa-solid fa-circle-info"></i>';

function displayText(event) {
	event.preventDefault();
	if (!zoneTexte.classList.contains('hide')) {
		zoneTexte.classList.add('hide');
		boutonTexte.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
		zoneTexte.innerHTML = '<p></p>';
	} else {
		zoneTexte.classList.remove('hide');
		zoneTexte.innerHTML =
			"<p class=\"enSavoirPlus\">Je suis bientôt diplômé d'un BUT Informatique.<br> Actuellement en alternance chez l'IMSA, j'ai pû mettre en pratique mes compétences en développement, mais aussi apprendre de nouvelles méthodes de travail (SCRUM, SAFE)<br> J’ai également eu l’occasion de réaliser plusieurs projets, universitaires ou personnels, comme des sites web et des applications.</p>";
		boutonTexte.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
	}
}
boutonTexte.addEventListener('click', displayText);
