const produit = document.getElementById('container-produit')

fetch('http://localhost:3000/api/teddies')
    .then(res => {
        if (res.ok){
            res.json().then(data => {
                data.forEach(element => {
                    document.createElement("div")
                    const divProduit = document.createElement("div")
                    divProduit.innerHTML =
                    `
                        <div class="produit__card">
                            <div>
                                <img class="ours" src="${element.imageUrl}" alt="Photo ours en peluche ${element.name}"/>
                            </div>
                            <div class="produit__card__text">
                                <h2>${element.name}</h2>
                                <br>
                                <p>${element.description}</p>
                                <br>
                                <div class="produit__card__color">
                                    <label for="head">Choisis la couleur :</label>
                                    <select name="color" id="color-select">
                                        <option value="couleur 1">${element.colors[0]}</option>
                                        <option value="couleur 2">${element.colors[1]}</option>
                                        <option value="couleur 3">${element.colors[2]}</option>
                                        <option value="couleur 4">${element.colors[3]}</option>
                                    </select>
                                </div>
                                <br>
                                <p>Prix : <strong>${element.price / 100} €</strong></p>
                                <br>
                                <div class="produit__card__panier">
                                    <a href="/view/menu/panier.html">
                                    <p>Panier</p>
                                    <img
                                    src="/images/market.svg"
                                    alt="Caddie représentant le panier"
                                    width="20"
                                    />
                                    </a>
                                </div>
                            </div>
                        </div>
                    `
                    produit.append(divProduit)
                })
            })
        } else {/*Sinon afficher message d'erreur*/
            console.log("ERROR")
            document.getElementById('erreur').innerHTML = "<strong>Erreur de chargement</strong>"
        }
    })