let params = (new URL(document.location)).searchParams
/* recuperation des URLs des objets */
let id = params.get("id")
/* recuperation du parametre ID dans une variable */
const produit = document.getElementById('container-produit')
/* Recuperation de l'element HTML "container-produit" dans une variable */

fetch(`http://localhost:3000/api/teddies/${id}`)
/* appel de l'API avec la methode FETCH avec le parametre ID */
.then(res => {
    if (res.ok){
    /* si resultat OK faire.. */
        res.json().then(data => {
        /* transformer la RES en objet Json */
            let elt = document.querySelector("button")
            /* stocker l'élément BUTTON dans la variable elt */
                elt.onclick = function (){
                /* quand "elt" est cliqué, lancer la function.. */
                    /* message d'alerte sur le navigateur */
                    let itemCart = localStorage.getItem("cart")
                    /* ajout de l'item du localStorage "obj" dans une variable "itemCart" */
                    let cart = JSON.parse(itemCart)
                    /* transformation de "itemCart" en objet Json et mis dans une variable "cart" */
                    let objet = null
                    /* initialiser la var "objet" avec la valeur null */
                    if(cart === null) {
                    /* si "cart" est null alors faire.. */
                        data.quantity = 1
                        /* ajoute une entrée "quantity" à "data" et egal à 1 */
                        data.priceTotal = data.quantity * data.price
                        objet = JSON.stringify({[data._id]:data})
                        /* convertit une valeur JavaScript en une chaîne de caractere */
                    } else {
                    /* sinon faire.. */
                        if(cart[data._id]) {
                            cart[data._id].quantity++
                        } else {
                            data.quantity = 1
                            cart[data._id] = data
                        }
                        cart[data._id].priceTotal = cart[data._id].quantity * data.price
                        objet = JSON.stringify(cart)
                    }
                    localStorage.setItem("cart",objet)
                    location.reload()
                }
            let colors = ""
            data.colors.forEach(element => {
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
                                <label for="head">Couleurs :</label>
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
        throw new Error('Erreur de chargement !')
    }
}).catch( function(error) {
    document.getElementById('erreur').innerHTML = "<strong>Erreur de chargement</strong>"
    console.log(error)}
)