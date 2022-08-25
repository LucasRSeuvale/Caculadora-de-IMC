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

        if (value < 18.5) document.getElementById('Magreza').style.display = 'block';

        else if (value >= 18.5 && value <= 24.9) document.getElementById('Normal').style.display = 'block';

        else if (value >= 25 && value <= 29.9) document.getElementById('Sobrepeso').style.display = 'block';

        else if (value >= 30 && value <= 34.9) document.getElementById('Obesidade1').style.display = 'block';

        else if (value >= 35 && value <= 39.9) document.getElementById('Obesidade2').style.display = 'block';

        else document.getElementById('Morreu').style.display = 'block';


    }
}