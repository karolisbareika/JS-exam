/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274
Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */





function calculations(event) {
    event.preventDefault();
    
const output = document.getElementById("output")
    const kg = document.getElementById('search').value;

    const lb = kg * 2.2046 + " " + "lb";
    const g = kg / 0.0010000 + " " + "g";
    const oz = kg * 35.274 + " " + "oz";


    document.getElementById("output").innerText = lb + " " + g + " " + oz;
    
    output.style.color = "red"
    output.style.backgroundColor = "white"
    output.style.alignSelf = "center"
}


document.querySelector('form').addEventListener('submit', calculations)

// čia užsižaidžiau ir neturėjau laiko/nemokėjau greitai padaryt