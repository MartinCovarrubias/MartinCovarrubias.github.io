const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pokemon-sad.png")
            PokeNombre("Desconocido")
            PokeType("Desconocido")
            PokeStats("0", "0")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokename = data.name;
            let type = data.types[0].type.name;
            let stats1 = data.stats[0].base_stat;
            let stats2 = data.stats[0].effort;
            let moves1 = data.moves[0].move.name;
            let moves2 = data.moves[1].move.name;
            pokeImage(pokeImg);
            PokeNombre(pokename);
            PokeType(type);
            PokeStats(stats1, stats2);
            PokeMove(moves1, moves2);
            
            console.log(pokeImg);
            console.log(pokename);
            console.log(type);
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;

}

const PokeNombre = (name) => {
    const pokeName = document.getElementById("pokename");
    pokeName.innerHTML = name;
}

const PokeType = (type) => {
    const Type = document.getElementById("type");
    Type.innerHTML = type;
}

const PokeStats = (stats1, stats2) => {
    const stats = document.getElementById("stats1" , "stats2");
    stats.innerHTML = `${stats1} / ${stats2}`;
}

const PokeMove = (moves1, moves2) => {
    const moves = document.getElementById("moves1", "moves2");
    moves.innerHTML = `${moves1} / ${moves2}`;
}