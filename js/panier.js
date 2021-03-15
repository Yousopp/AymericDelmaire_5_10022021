let objet = localStorage.getItem("obj")
/* recuperer item "obj" dans le localStorage dans var "objet"*/
let objJson = JSON.parse(objet)
/* transformer la chaîne Json en objet dans var "objJson*/

for(var obj in objJson) {
/* pour chaque "objJson" dans var "obj" faire.. */    
    document.getElementById('test').innerHTML =
    /* insérer du HTML dans l'element avec l'ID "test" */
    `
        <tr>
            <td>${objJson[obj].name}</td>
            <td>${objJson[obj]._id}</td>
            <td>${objJson[obj].quantity}</td>
            <td>${objJson[obj].price / 100} €</td>
            <td>&#x274C;</td>
        </tr>
    `
}