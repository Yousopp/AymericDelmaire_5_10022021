/*
Récupération des données de l'API teddies
AJAX
*/

/*var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();*/

/*
FETCH
*/

const img = document.getElementById('img')

fetch('http://localhost:3000/api/teddies')
    .then(res => res.json())
    .then(data => img.src = data[0].imageUrl)