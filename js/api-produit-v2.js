let params = (new URL(document.location)).searchParams
let id = params.get("id")

const produit = document.getElementById('container-produit')

fetch(`http://localhost:3000/api/teddies/${id}`)
.then(res => {
    if (res.ok){
        res.json().then(data => {
            /*Ajout d'un objet dans le localStorage au clic du button*/
            let elt = document.querySelector('button')
                elt.onclick = function(){
                    alert('Votre article à bien été ajouté au panier !')
                    var item = data
                    console.log(item)
                    let objet = JSON.stringify(item);
                    localStorage.setItem("obj",objet);
                }
            let colors = ""
            data.colors.forEach(element => {
                console.log(element)
                colors += `<option value="${element}">${element}</option>`                  
            });
                document.createElement("div")
                const divProduit = document.createElement("div")
                divProduit.innerHTML =
                `
                    <div class="produit__card">
                        <div>
                            <img class="ours" src="${data.imageUrl}" alt="Photo ours en peluche ${data.name}"/>
                        </div>
                        <div class="produit__card__text">
                            <h2>${data.name}</h2>
                            <br>
                            <p>${data.description}</p>
                            <br>
                            <div class="produit__card__color">
                                <label for="head">Couleur :</label>
                                <select name="color" id="color-select">
                                `+colors+`
                                </select>
                            </div>
                            <br>
                            <p>Prix : <strong>${data.price / 100} €</strong></p>
                        </div>
                    </div>
                `
                produit.append(divProduit)
            })
    } else {/*Sinon afficher message d'erreur*/
        console.log("ERROR")
        document.getElementById('erreur').innerHTML = "<strong>Erreur de chargement</strong>"
    }
})
