const idPokemon = document.querySelector('#idPokemon');
const namePokemon = document.querySelector('#namePokemon');
const imgPokemon = document.querySelector('#imgPokemon');
const type = document.querySelector('#type');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const background = document.querySelector('.background');
const background1 = document.querySelector('#cardInformation');
const background2 = document.querySelector('#cardPokemon');
const background3 = document.querySelector('#cardAbilities');
const input = document.querySelector('#fetchPokemon');
const ability1 = document.querySelector('#ability1');
const ability2 = document.querySelector('#ability2');
const ability3 = document.querySelector('#ability3');
const ability4 = document.querySelector('#ability4');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    idPokemon.innerHTML = data.id;
    namePokemon.innerHTML = data.name;
    imgPokemon.src = data['sprites']['other']['home']['front_default'];
    type.innerHTML = data['types']['0']['type']['name'];
    weight.innerHTML = `${data.weight} Kg`;
    height.innerHTML =  `${data.height}m`;
    ability1.innerHTML = data['moves']['0']['move']['name'];
    ability2.innerHTML = data['moves']['1']['move']['name'];
    ability3.innerHTML = data['moves']['2']['move']['name'];
    ability4.innerHTML = data['moves']['3']['move']['name'];
    
    switch (data['types']['0']['type']['name']) {
        case "fire":
            background.style.backgroundColor = "var(--vermelho)";
            background1.style.backgroundColor = "var(--vermelho)";
            background2.style.backgroundColor = "var(--vermelho)";
            background3.style.backgroundColor = "var(--vermelho)";
            break;
        case "grass":
            background.style.backgroundColor = "var(--verde)";
            background1.style.backgroundColor = "var(--verde)";
            background2.style.backgroundColor = "var(--verde)";
            background3.style.backgroundColor = "var(--verde)";
            break;
        case "water":
            background.style.backgroundColor = "var(--azul)";
            background1.style.backgroundColor = "var(--azul)";
            background2.style.backgroundColor = "var(--azul)";
            background3.style.backgroundColor = "var(--azul)";
            break;
        case "ghost":
            background.style.backgroundColor = "var(--preto)";
            background1.style.backgroundColor = "var(--preto)";
            background2.style.backgroundColor = "var(--preto)";
            background3.style.backgroundColor = "var(--preto)";
            break;
        case "psychic":
            background.style.backgroundColor = "var(--cinza)";
            background1.style.backgroundColor = "var(--cinza)";
            background2.style.backgroundColor = "var(--cinza)";
            background3.style.backgroundColor = "var(--cinza)";
            break;
        case "fairy":
            background.style.backgroundColor = "var(--rosa)";
            background1.style.backgroundColor = "var(--rosa)";
            background2.style.backgroundColor = "var(--rosa)";
            background3.style.backgroundColor = "var(--rosa)";
            break;
        case "dark":
            background.style.backgroundColor = "var(--pretao)";
            background1.style.backgroundColor = "var(--pretao)";
            background2.style.backgroundColor = "var(--pretao)";
            background3.style.backgroundColor = "var(--pretao)";
            break;
        case "ice":
            background.style.backgroundColor = "var(--azulzin)";
            background1.style.backgroundColor = "var(--azulzin)";
            background2.style.backgroundColor = "var(--azulzin)";
            background3.style.backgroundColor = "var(--azulzin)";
            break;     
        case "electric":
            background.style.backgroundColor = "var(--amarelo)";
            background1.style.backgroundColor = "var(--amarelo)";
            background2.style.backgroundColor = "var(--amarelo)";
            background3.style.backgroundColor = "var(--amarelo)";
            break;
        case "ground":
            background.style.backgroundColor = "var(--marrom)";
            background1.style.backgroundColor = "var(--marrom)";
            background2.style.backgroundColor = "var(--marrom)";
            background3.style.backgroundColor = "var(--marrom)";
            break; 
        case "fighting":
            background.style.backgroundColor = "var(--vermelhin)";
            background1.style.backgroundColor = "var(--vermelhin)";
            background2.style.backgroundColor = "var(--vermelhin)";
            background3.style.backgroundColor = "var(--vermelhin)";
            break;        
        default:
            background.style.backgroundColor = "var(--azul)";
            background1.style.backgroundColor = "var(--azul)";
            background2.style.backgroundColor = "var(--azul)";
            background3.style.backgroundColor = "var(--azul)";
            background4.style.backgroundColor = "var(--azul)";
            break;
    }
}
background.addEventListener('submit', (event) =>{
    event.preventDefault();
    renderPokemon(input.value);
    input.value = '';

})

renderPokemon('1');
