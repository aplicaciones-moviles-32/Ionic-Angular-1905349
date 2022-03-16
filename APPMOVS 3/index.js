
var arreglo = ["img/original.jpg","img/unosPelillos.jpg",
"img/meDaAnsiedad.jpg","img/mamadisimo.webp","img/perroU.webp",
"img/perro chapulin.webp",
];

var usuario = {
    "nombre": "Josue Perrillo",
    "correo": "perrillofcfm@gmail.com",
    "id":"@elmasGuapodelaFesefu",
    "password":"123",
    "fotodeperfil":"img/original.jpg",
    "fechadenacimiento":25/04/2022,
    "seguidores": 5000000,
    "seguidos": 10,
    "descripcion": "Apenas las subo a git porque me dió amsidamn"
};

var feed = [
    {
        "idPublicacion": "12",
        "usuario": "@ChempsAmsidamn_01",
        "imagen": "img/mamadisimo.webp",
        "caption": "Amndo amsioso deberas"
    },
    {
        "idPublicacion": "03",
        "usuario": "LaUperro_fcfm",
        "imagen": "img/perroU.webp",
        "caption": "¡¡Arriba la U!!"
    },
   
    {
        "idPublicacion": "122",
        "usuario": "@ahperrooo",
        "imagen": "img/meDaAnsiedad.jpg",
        "caption": "Me gusta la cerveza y tu novia... ah te creas perrillo yo no tomo"
    },
    {
        "idPublicacion": "01",
        "usuario": "@unospelillos",
        "imagen": "img/unosPelillos.jpg",
        "caption": "¿Y tu novia? ya no subiste fotos con ella...Unos pelillos"
    },
    
    {
        "idPublicacion": "20",
        "usuario": "@perrillo_chapulin",
        "imagen": "img/perro chapulin.webp",
        "caption": "Yo: Presentala bro... Mi bro: es mi novia :/"
        
    }
]

var contenedorPerfil = document.getElementById("imagenes");
var contenedorInicio = document.getElementById("imgInicio");

function colocarImagenes(lugar, rowNum){
    //Ciclo que agregar imagenes dependiendo del tamaño del arreglo
    for(var i = 0; i<arreglo.length; i++){
        var columna = document.createElement("ion-col"); //Crea una columna
        columna.size = rowNum; //asignamos el valor de las columnas
        var img = document.createElement("img"); //se crea el elemento de imagen
        img.src = arreglo[i]; //Le asignamos la imagen del arreglo
        columna.appendChild(img); //Contenemos la imagen detro de la columna
        lugar.appendChild(columna); //contenemos la columna dentro del contenedor
    }
}


colocarImagenes(contenedorPerfil, 4);
//colocarImagenes(contenedorInicio, 12);
//Cambiando la informacion del usuario

var nom = document.getElementById("nombre");
var fotodeperfil = document.getElementById("fotodeperfil");
var id = document.getElementById("id");
var seguidores = document.getElementById("seguidores");
var seguidos = document.getElementById("seguidos");
var publicaciones = document.getElementById("publicaciones");
var descripcion = document.getElementById("descripcion");
//Asinamos las propiedades a cada elemento del usuario
nom.innerText = usuario.nombre;
fotodeperfil.src = usuario.fotodeperfil;
id.innerHTML=usuario.id;
seguidores.innerText = usuario.seguidores;
seguidos.innerText = usuario.seguidos;
publicaciones.innerText = arreglo.length;
descripcion.innerText = usuario.descripcion;

/* feed de instagram*/
var content = document.getElementById("contenido");
for(i = 0; i<feed.length; i++){//ciclo que crea las card o publicaciones dentro del feed
    var tarjeta = document.createElement("ion-card");
    var header = document.createElement("ion-card-header");
    var grid = document.createElement("ion-grid");
    var row = document.createElement("ion-row");
    var col1 = document.createElement("ion-col");
    col1.size = 2;
    var fotoperfil = document.createElement("img");
    fotoperfil.src = feed[i].imagen;
    col1.appendChild(fotoperfil);
    var col2 = document.createElement("ion-col");     //col2.size = 2;
    var user=document.createElement("p");
    
    user.innerText= feed[i].usuario;
    col2.appendChild(user);
    row.appendChild(col1);
    row.appendChild(col2);
    grid.appendChild(row);
    header.appendChild(grid);

    var conte = document.createElement("ion-card-content");
    var imagenFeed = document.createElement("img");
    imagenFeed.src = feed[i].imagen;
    var descrip = document.createElement("p");
    descrip.innerText = feed[i].caption;

    conte.appendChild(imagenFeed);
    conte.appendChild(descrip);
    tarjeta.appendChild(header);
    tarjeta.appendChild(conte);
    content.appendChild(tarjeta);
}