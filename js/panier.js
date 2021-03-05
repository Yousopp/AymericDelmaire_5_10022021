let objet = localStorage.getItem("obj");
let objJson = JSON.parse(objet);

/*Récupération du dernier objet dans le localStorage et inséré dans un tableau*/
document.getElementById('test').innerHTML = 
    `
        <tr>
            <td>${objJson.name}</td>
            <td>${objJson._id}</td>
            <td>1</td>
            <td>${objJson.price / 100}</td>
            <td>&#x274C;</td>
        </tr>
    `
