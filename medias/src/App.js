import personnages from '../../src/personnages.js';
console.log(personnages);

export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		var h2 = document.createElement("h2");
		h2.textContent = "Les personnages";
		app.appendChild(h2);
		var section = document.createElement("section");
		section.className = "personnages";
		app.appendChild(section);
		for (let cle in personnages) {
			const personnage = personnages[cle];
			const article = this.htmlPersonnage(personnage);
			section.appendChild(article);
		}
	}
	static htmlPersonnage(personnage) {
		const article = document.body.appendChild(document.createElement("article"));
		const h2 = article.appendChild(document.createElement("h2"));
		h2.textContent = personnage.nom;
		const img = article.appendChild(document.createElement("img"));
		img.src = "../img/persos/" + personnage.img;
		img.alt = personnage.nom;
		const p = article.appendChild(document.createElement("p"));
		p.textContent = personnage.description;
		return article;
	}
}
