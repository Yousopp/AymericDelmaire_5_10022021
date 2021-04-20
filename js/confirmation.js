let params = (new URL(document.location)).searchParams
/* recuperation des URLs des objets */

let orderId = params.get("orderId")
let firstName = params.get("firstName")

console.log(orderId)
console.log(firstName)

let confirmation = 
    `
        <p>Merci pour votre commande <strong>${firstName}</strong> &#x2705;</p>
        <p>Commande n° <br><strong>${orderId}</strong></p>
        <p>Prix total : <strong>${localStorage.priceTotal / 100}</strong> €</p>
    `
document.getElementById('confirmation').innerHTML = confirmation
localStorage.clear()//MODIFICATION//