/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).
Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/user';


fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => getCard(data));

function getCard(data) {
    const users = data;
    console.log(data);
    const output = document.getElementById('output')

    users.forEach(element => {

        const mainCard = document.createElement('div');
       
        const picDiv = document.createElement('div');
        const mainCardImg = document.createElement('img');
        mainCardImg.src = users.image;

        const loginDiv = document.createElement('div');
        const mainCardLogin = document.createElement('h4').innerText = users.login;


        output.append(mainCard);
        mainCard.append(picDiv, loginDiv);
        picDiv.append(mainCardImg);
        loginDiv.append(mainCardLogin);

    })
}


// pastrigau ieškodamas dėl ko errorą meta