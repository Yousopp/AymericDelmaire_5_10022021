let objet = localStorage.getItem("obj");
let objJson = JSON.parse(objet);
/*alert(objJson.name)*/
document.getElementById('test').innerHTML = 
    `
    <table>
        <tr>
            <td><strong>NAME</strong></td>
            <td><strong>ID</strong></td>
            <td><strong>QUANTITE</strong></td>
            <td><strong>PRIX</strong></td>
        </tr>
        <tr>
            <td>${objJson.name}</td>
            <td>${objJson._id}</td>
            <td>1</td>
            <td>${objJson.price / 100}</td>
            <td>&#x274C;</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><strong>Total</strong></td>
            <td><strong>###</strong></td>
        </tr>
    </table>
    `
