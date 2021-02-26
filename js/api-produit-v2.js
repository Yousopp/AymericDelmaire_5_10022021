async function auteurById(){
    let rep = await fetch('http://localhost:3000/api/teddies', { method: 'GET' });
    let reponse = await rep.json();
    console.log(rep);
}