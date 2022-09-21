window.addEventListener('load', () => {
    if (sessionStorage.getItem("numeroVoto") != null){
        let voto = document.getElementById("votoGato");
        voto.innerHTML = "Realizado voto de numero " + sessionStorage.getItem("numeroVoto")
    }
    let states = document.getElementById('states');

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(statesReturned => {        
        return statesReturned.json();
    })
    .then(statesFormated => {
        console.log(statesFormated)
        for (i=0; i < statesFormated.length; i++) {
            states.innerHTML += '<li>' + statesFormated[i].nome + '</li>'
        }

    })
    .catch(error => console.log(error));
})
