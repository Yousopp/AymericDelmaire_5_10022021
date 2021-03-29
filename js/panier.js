let objet = localStorage.getItem("obj")
/* recuperer item "obj" dans le localStorage dans var "objet"*/
let objJson = JSON.parse(objet)
/* transformer la chaîne Json en objet dans var "objJson*/
var logoNew = document.getElementById('logoNew')

if (objet === '{}' || objet === null) {
    logoNew.style.display = 'none'
    let table = 
    `
    <tr>
        <p><strong>Votre panier est vide !</strong></p>
    </tr>
    `
    document.getElementById('table').innerHTML = table
    /* insérer du HTML dans l'element avec l'ID "table" */
} else {
    logoNew.style.display = 'block'
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
                <td><input type="number" value="${objJson[obj].quantity}" min="1" onchange="changePrice('${objJson[obj]._id}')"></td>
                <td>${objJson[obj].price / 100} €</td>
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
        <td><strong>###</strong></td>
    </tr>
    `
    document.getElementById('table').innerHTML = table
    /* insérer du HTML dans l'element avec l'ID "table" */
}

let elt = document.getElementsByClassName("ctaDelete")
function deleteItem(idToRemove){
    delete objJson[idToRemove]
    /*alert("Le produit à bien été retiré du panier ✓")*/
    localStorage.setItem("obj", JSON.stringify(objJson))
    location.reload()
}

function changePrice(varQuantity){
    objJson[varQuantity].quantity++
    console.log(objJson[varQuantity].price)
    console.log(objJson[varQuantity].quantity)
    alert("La quantité du produit à bien changé ✓")
    localStorage.setItem("obj", JSON.stringify(objJson))
}

