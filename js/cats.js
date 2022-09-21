window.addEventListener('load', () => {
    let data = {
        image_id: "asf2",
        sub_id: "my-user-1234",
        value: 1
    }

    let settings = {
        "method" : "POST",
        "headers": {
            "content-type": "application/json",
            "x-api-key": "suaChave"
        },
        "body": JSON.stringify(data)

    }


    let cats = document.getElementById('gatos');

fetch('https://api.thecatapi.com/v1/votes', settings)
    .then(catsReturned => {                
        return catsReturned.json();
    })
    .then(catsFormated => {
        console.log(catsFormated)     
        if (catsFormated.message == "SUCCESS"){
            sessionStorage.setItem("numeroVoto", catsFormated.id)
        }
        cats.innerHTML = catsFormated.message;
    })
    .catch(error => console.log(error));
})
