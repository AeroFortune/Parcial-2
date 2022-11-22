let panes = [];

function ObtenerDatos(){
    fetch('').
    then(resultado => {
        resultado.json().then(json => {
            panes = json.results;
            MapearPan();
        })
    });
}

function MapearPan(){
    let contenedor = document.getElementById('id');
    for(let i=0;i<panes.length;i++){
        contenedor.innerHTML+=MapearPlantilla(panes[]);
    }

}

}

function MapearPlantilla(){

}


{/* <article class="articulo">
                <img src="/img/pan-maiz.jpg" alt="">
                <h1>Pan de maíz</h1>
                <br>
                <p>Se elabora con harina de maíz que no contiene gluten, lo que hace que sea un pan apto para celíacos.
                </p>
                <br>
                <button class="button">Learn More</button>
            </article> */}
