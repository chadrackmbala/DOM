// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[1];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "aucune description pour le moment";
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "aucune catégorie disponible";
const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "Stock epuisé !"

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);

article.prix < 35 ? "€" : "€€€"