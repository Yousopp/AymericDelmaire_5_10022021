let objet = localStorage.getItem("cart")
/* recuperer item "obj" dans le localStorage dans var "objet"*/
let objJson = JSON.parse(objet)
/* transformer la chaîne Json en objet dans var "objJson*/


//Création d'un tableau pour afficher les produits du panier
//Il y a un message par défaut si le panier est vide
if (objet === '{}' || objet === null) {
    let table = 
    `
    <tr>
        <p><strong>Votre panier est vide !</strong></p>
    </tr>
    `
    document.getElementById('table').innerHTML = table
    /* insérer du HTML dans l'element avec l'ID "table" */
} else {
    table = 
    `
    <tr>
        <td><strong>NAME</strong></td>
        <td><strong>ID</strong></td>
        <td><strong>QUANTITE</strong></td>
        <td><strong>PRIX</strong></td>
    </tr>
    `
    for(var obj in objJson) {
    /* pour chaque "objJson" dans var "obj" faire.. */
        table +=
        `
            <tr>
                <td>${objJson[obj].name}</td>
                <td id="productsId">${objJson[obj]._id}</div></td>
                <td><input id="tdInputNumber" type="number" value="${objJson[obj].quantity}" min="1" onchange="updateQuantity('${objJson[obj]._id}', this.value)"></td>
                <td id="priceTotal-${objJson[obj]._id}">${objJson[obj].priceTotal / 100} €</td>
                <td><button onclick="deleteItem('${objJson[obj]._id}')">&#x274C;</button></td>
            </tr>
        `
    }
    table += 
    `
    <tr>
        <td  colspan="3"><strong>Total</strong></td>
        <td id="priceTotal"><strong></strong></td>
    </tr>
    `
    document.getElementById('table').innerHTML = table
    /* insérer du HTML dans l'element avec l'ID "table" */
}

//Fonction qui supprime la ligne de produit lors du clique sur le bouton
function deleteItem(idToRemove){
    delete objJson[idToRemove]
    localStorage.setItem("cart", JSON.stringify(objJson))
    location.reload()
}

function addLogoNew() {
    var logoNew = document.getElementById('logoNew')
    if (localStorage.cart === '{}' || localStorage.length <= 1) {
        logoNew.style.display = 'none'
    } else {
        logoNew.getElementsByClassName('appear').innerHTML = 'display: block;'
    }
}
addLogoNew()

//Fonction pour créer un prixTotal afin de l'utiliser pour afficher le prix total plus facillement dans la panier
function calculPriceTotal() {
    var cart = JSON.parse(localStorage.getItem("cart"))
    var priceTotalCart = 0
    for (var obj in cart) {
        priceTotalCart += cart[obj].priceTotal
    }
    localStorage.setItem("priceTotal", priceTotalCart)
    document.getElementById("priceTotal").innerHTML = `${priceTotalCart / 100} €`
}
calculPriceTotal()

//Fonction qui modifie la quantité directement sur la page du panier et mets à jour le prixTotal
function updateQuantity(idObject, valueQuantity){
    objJson[idObject].quantity = valueQuantity
    objJson[idObject].priceTotal = objJson[idObject].quantity * objJson[idObject].price
    document.getElementById(`priceTotal-${objJson[idObject]._id}`).innerHTML = `${objJson[idObject].priceTotal / 100} €`
    localStorage.setItem("cart", JSON.stringify(objJson))
    calculPriceTotal()
}

//----------------------Méthode POST------------------------//

//Fonction qui valide le formulaire et l'envoi, via la méthode POST, au serveur afin d'avoir une réponse
function valid(){

    if(document.forms['formCommand'] != "") {
      // les données sont ok, on peut envoyer le formulaire

      const contact = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
      };

      const products = [Object.keys(objJson)]
      // Met dans une variable les noms des propriétés propres à l'objet : objJson
      // Ce qui donne ["a", "b", ...]
        
      const command = {contact, products}
        
      const options = {
        method: "POST",
        body: JSON.stringify(command),
        headers: {
            "Content-Type" : "application/json"
        }
      }

      fetch('http://localhost:3000/api/teddies/order', options)
          .then(res => res.json())
          .then(res => { 
            if (res.orderId) {
              console.log(res);
              alert(`Votre commande numéro ${res.orderId} à bien été passée.`)
              window.location = `/view/menu/confirmation.html?orderId=${res.orderId}&firstName=${res.contact.firstName}`
            } else {
              alert(`Erreur de commande`)
            }
          });
      return true;
    }

    else {
      // sinon on affiche un message
      alert("Veuilliez remplir le formulaire.");
      return false;
    }

  }

