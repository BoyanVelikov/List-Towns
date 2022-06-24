import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

let townsList = [];
let listTemplate = document.getElementById('root');
let inputTowns = document.getElementById('towns');
let buttonLoadTowns = document.getElementById('btnLoadTowns');
buttonLoadTowns.addEventListener('click', showTowns);
listTemplate.innerHTML = "";
let newUl = document.createElement('ul');
listTemplate.appendChild(newUl);


function showTowns() {
    
    townsList = inputTowns.value.split(', ');
  
    const check = (town) => {
        return html `<li>${town}</li>`;
    };

    const second =
        townsList.map((element) => check(element));

    render(second, newUl);
}
