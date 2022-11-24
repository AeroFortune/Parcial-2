let baseUrl = "http://localhost:8080";
let panes = [];

function ObtenerPanes(){
    fetch(baseUrl + '/panaderia/all').
    then(resultado => {
        resultado.json().then(json => {
            panes = json;
            console.log(panes);
            ImprimirPanes();
        })
    });
}

function ImprimirPanes(){
    let contenedor = document.getElementById("seccionArticulos");

    panes.forEach(panes => {
        contenedor.innerHTML += MapearPlantilla(panes);
    });
}

function MapearPlantilla(panes){
    return  `<article class="articulo">
    <img src="${panes.fotoUrl}" alt="">
    <h1>${panes.nombre}</h1>
    <br>
    <p>${panes.descripcion}
    </p>
    <br>
    <button class="button">Aprende más</button>
    </article>`;
}
