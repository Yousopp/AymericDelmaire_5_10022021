//Page dynamique index.HTML, afficher les éléments dans des cartes avec les données de l'API

const container = document.getElementById('container-article')/*Créer une variable qui récupère mon ID du container*/

fetch('http://localhost:3000/api/teddies')/*Méthode Fetch pour aller chercher l'URL de l'API*/
    .then(res => {
        if(res.ok){/*Si l'URL est OK (true) alors faire...*/
            res.json().then(data => {/*Convertion des données en JSON pour les utiliser*/
            data.forEach(element => {
                document.createElement("section")/*Création d'un élément section*/
                const section = document.createElement("section")/*Création d'une variable section pour stocker notre élément section*/
                section.innerHTML = /*Création d'un objet en HTML, ici la carte*/
                `
                    <div class="card">
                        <img class='produit' src='${element.imageUrl}' alt='Photo d'un ours en peluche' title='Ours en peluche ${element.name}'/>
                        <h2>${element.name}</h2>
                        <div class="card__description">
                            <img
                            class="rating-star"
                            src="/images/rating_5.png"
                            alt="Note 5 étoiles sur 5"
                            />
                            <p>${element.price / 100} €</p>
                        </div>
                        <a href="/view/menu/produit.html?id=${element._id}">Détail du produit</a>
                    </div>
                `
            container.append(section)/*Permet d'insérer un ensemble d'objets dans la variable section*/
            })
        })
        } else {/*Sinon afficher message d'erreur*/
            console.log("ERROR")
            document.getElementById('erreur').innerHTML = "<strong>Erreur de chargement</strong>"
        }
})