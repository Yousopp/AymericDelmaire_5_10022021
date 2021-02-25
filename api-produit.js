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
                                <p>${element.desciption}</p>
                                <br>
                                <div class="produit__card__color">
                                    <label for="head">Choisis la couleur :</label>
                                    <input type="color" id="corps" name="corps" value="#e66465"/>
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

    /*
        <div class="produit__card">
          <div>
            <img
              class="ours"
              src="/images/teddy_1.jpg"
              alt="Photo ours en peluche Teddy"
            />
          </div>
          <div class="produit__card__text">
            <h2>Teddy</h2>
            <br />
            <p>Ours en peluche, fabriqué en France en coton 100% bio.</p>
            <br />
            <div class="produit__card__color">
              <label for="head">Choisis la couleur :</label>
              <input type="color" id="corps" name="corps" value="#e66465" />
            </div>
            <br />
            <p>Prix : <strong>29€</strong></p>
            <br />
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
*/