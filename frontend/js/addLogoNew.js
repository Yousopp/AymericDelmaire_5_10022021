
//Apparition du logo NEW dans le panier lorsque celui-ci est rempli, par défaut il est non visible
//Méthode utilisée : changement du display de none à block en changeant la classe

function addLogoNew() {
    var logoNew = document.getElementById('logoNew')
    console.log(localStorage)
    if (localStorage.cart === '{}' || localStorage.length <= 1) {
        logoNew.style.display = 'none'
    } else {
        logoNew.getElementsByClassName('appear').innerHTML = 'display: block;'
    }
}
addLogoNew()