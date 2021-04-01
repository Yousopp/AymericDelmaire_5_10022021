let objet = localStorage.getItem("cart")
/* recuperer item "obj" dans le localStorage dans var "objet"*/
let objJson = JSON.parse(objet)
/* transformer la chaîne Json en objet dans var "objJson*/

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
                <td>${objJson[obj]._id}</div></td>
                <td><input type="number" value="${objJson[obj].quantity}" min="1" onchange="updateQuantity('${objJson[obj]._id}', this.value)"></td>
                <td id="priceTotal-${objJson[obj]._id}">${objJson[obj].priceTotal / 100} €</td>
                <td><button onclick="deleteItem('${objJson[obj]._id}')">&#x274C;</button></td>
            </tr>
        `
    }
    table += 
    `
    <tr>
        <td></td>
        <td></td>
        <td><strong>Total</strong></td>
        <td id="priceTotal"><strong></strong></td>
    </tr>
    `
    document.getElementById('table').innerHTML = table
    /* insérer du HTML dans l'element avec l'ID "table" */
}

let elt = document.getElementsByClassName("ctaDelete")
function deleteItem(idToRemove){
    delete objJson[idToRemove]
    /*alert("Le produit à bien été retiré du panier ✓")*/
    localStorage.setItem("cart", JSON.stringify(objJson))
    location.reload()
}

function updateQuantity(idObject, valueQuantity){
    objJson[idObject].quantity = valueQuantity
    objJson[idObject].priceTotal = objJson[idObject].quantity * objJson[idObject].price
    document.getElementById(`priceTotal-${objJson[idObject]._id}`).innerHTML = `${objJson[idObject].priceTotal / 100} €`
    localStorage.setItem("cart", JSON.stringify(objJson))
    calculPriceTotal()
}

function addLogoNew() {
    var logoNew = document.getElementById('logoNew')
    if (objet === '{}' || objet === null) {
        logoNew.style.display = 'none'
    } else {
        logoNew.getElementsByClassName('appear').innerHTML = 'display: block;'
    }
}
addLogoNew()

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

//----------------------POST------------------------//

const contact = {
    firstName: 'John',
    lastName: 'Lilly',
    address: '34 rue Martinez',
    city: 'Reims',
    email: 'test@hotmail.com'
};
 
const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    product_id: new Array(objJson)
}
 
fetch('http://localhost:3000/api/teddies/order', options)
    .then(res => res.json())
    .then(res => console.log(res));