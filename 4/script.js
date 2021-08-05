/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.
Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('cars.json')
  .then(response => response.json())
  .then(data => getCard(data));

function getCard(data) {
  const cars = data;
  const output = document.getElementById('output')

  cars.forEach(element => {

    const mainCard = document.createElement('div');
    const table = document.createElement('table');
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    th.innerHTML = element.brand;
    td.innerHTML = element.models;

    output.append(mainCard);
    mainCard.append(table);
    table.append(th, tr, td);

  })
}
