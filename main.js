//1
let titre = document.querySelector('h1');

let changement = () => {
    titre.style.backgroundColor="red";
    titre.style.color = "white"
}

titre.addEventListener ("dblclick", changement)

//2

let exo2 = document.querySelector('h3');

let changement2 = () => {
    exo2.style.fontSize = "15px";
}

exo2.addEventListener('mouseover', changement2);

// 3
let para = document.querySelector('p');

let exo3 = () => {

    if (para.style.color == 'gold') {
        para.style.color = 'black'
        para.style.backgroundColor = 'white'
    } else {
        para.style.color = 'gold'
        para.style.backgroundColor = 'blue'
    }
}

para.addEventListener("click", exo3)