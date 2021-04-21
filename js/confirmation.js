let confirmation = 
    `
        <p>Merci pour votre commande <strong>${localStorage.firstName}</strong> &#x2705;</p>
        <p>Commande n° <br><strong>${localStorage.orderId}</strong></p>
        <p>Prix total : <strong>${localStorage.priceTotal / 100}</strong> €</p>
    `
document.getElementById('confirmation').innerHTML = confirmation
localStorage.clear()//MODIFICATION//