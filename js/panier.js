let objet = localStorage.getItem("obj")
/* recuperer item "obj" dans le localStorage dans var "objet"*/
let objJson = JSON.parse(objet)
/* transformer la chaîne Json en objet dans var "objJson*/

let table = 
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
            <td>${objJson[obj].quantity}</td>
            <td>${objJson[obj].price / 100} €</td>
            <td>&#x274C;</td>
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
/* insérer du HTML dans l'element avec l'ID "test" */