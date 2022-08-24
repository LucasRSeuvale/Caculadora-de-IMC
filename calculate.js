function Calculate() {

    let height = parseInt(document.querySelector("#Height").value);

    let weight = parseInt(document.querySelector("#Weight").value);

    let result = document.querySelector("#result");


    if (height === "" || isNaN(height))
        result.innerHTML = "you need to enter a valid height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "you need to enter a valid weight!";


    else {
        let value = (weight / ((height * height) / 10000)).toFixed(2);

        if (value < 18.5) result.innerHTML = `Magreza : <span>${value}</span>`;

        else if (value >= 18.5 && value <= 24.9) result.innerHTML = `Normal : <span>${value}</span>`;

        else if (value >= 25 && value <= 29.9) result.innerHTML = `Sobrepeso : <span>${value}</span>`;

        else if (value >= 30 && value <= 34.9) result.innerHTML = `Obesidade grau I : <span>${value}</span>`;

        else if (value >= 35 && value <= 39.9) result.innerHTML = `Obesidade grau II : <span>${value}</span>`;

        else result.innerText = `Morreu : <span>${value}</span>`;
        
    }

}