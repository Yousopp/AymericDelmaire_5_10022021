let objet = localStorage.getItem("obj")
console.log(objet)
let objJson = JSON.parse(objet)
console.log(objJson)

/*Récupération du dernier objet dans le localStorage et inséré dans un tableau*/
document.getElementById('test').innerHTML = 
    `
        <tr>
            <td>${objJson.name}</td>
            <td>${objJson._id}</td>
            <td>${objJson.quantity}</td>
            <td>${objJson.price / 100} €</td>
            <td>&#x274C;</td>
        </tr>
    `
