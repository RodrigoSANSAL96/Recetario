var recetas = [];
var ingredientesDisponibles = [];
var nombreU = "";
var nombre = "";
var ingredientes = [];
var preparacion = "";
var recetaU = [];

const agregar = document.createElement("button");
const encontrar = document.createElement("button");
const crear = document.createElement("button");
const verIngredientes = document.createElement("button");
const verRecetas = document.createElement("button");

function menu() {
    
    agregar.type = "button";
    agregar.innerText = "Agregar ingredientes";
    document.body.appendChild(agregar);

    encontrar.type = "button";
    encontrar.innerText = "Encontrar receta";
    document.body.appendChild(encontrar);

    crear.type = "button";
    crear.innerText = "Crear nueva receta";
    document.body.appendChild(crear);

    verIngredientes.type = "button";
    verIngredientes.innerText = "Ver ingredientes disponibles";
    document.body.appendChild(verIngredientes);

    verRecetas.type = "button";
    verRecetas.innerText = "Ver recetas creadas";
    document.body.appendChild(verRecetas);

    // mostrar menu:
    // boton de agregar ingredientes disponbiles
    // boton de encontrar receta
    // boton de crear nueuva receta
}
menu();

function agregarIngredienteDisponible() {
    agregar.addEventListener("click", (e) => {
        ingredienteAgregado = [" "];
        var ingredienteAgregado = prompt("Ingrese un ingrediente");
        ingredientesDisponibles.push(ingredienteAgregado);
        console.log(ingredientesDisponibles);
    });   
    // pide al usuario el ingrediente y lo agrega a la lista
}
agregarIngredienteDisponible();

var mostrarIngredientes = document.createElement("p");

function verIngredientesAgregados(){
    verIngredientes.addEventListener("click", (e) => {
        mostrarIngredientes.type = "text";
        mostrarIngredientes.innerText = "Ingredientes disponibles: " + ingredientesDisponibles;
        document.body.appendChild(mostrarIngredientes);
    })
}
verIngredientesAgregados();


function encontrarReceta() {
    encontrar.addEventListener("click", (e) => {
        var recetasEncontradas = [];
        for(l = 0; l < recetas.length; l++){
            var contador = 0;
            contador++;
            for(k = 0 ; k < recetas[l]["ingredientes"]; k++){
                var ingredientesRecetas = 0;
                ingredientesRecetas++
                for(j = 0; j < ingredientesDisponibles.length; j++){
                    if(ingredientesDisponibles === ingredientesRecetas){
                        contador++
                        if(contador === ingredientesRecetas.length){
                            recetasEncontradas.push(recetas);
                        }
                    }
                }
            }
        }
        for(m = 0; m < recetasEncontradas; m++){
            var mostrarRecetasEncontradas = document.createElement("div");
            mostrarRecetasEncontradas.innerText = "Receta encontradas: " + recetasEncontradas;
            document.body.appendChild(mostrarRecetasEncontradas);
        }
    });
}
encontrarReceta();
    // busca cual receta se puede hacer en base a los ingredientes disponibles agregados
    // se muestran los ingredientes y la preparación 

function crearNuevaReceta() {
    crear.addEventListener("click", (e) => {
        nombreU = prompt("Ingrese el nombre de la receta");
        var i = 0;
        var cantidad = 0;
        cantidad = prompt("Ingrese la cantidad de ingredientes");
        while(i < cantidad){
            ingredientesIngresados = prompt("Ingrese un ingrediente");
            ingredientes.push(ingredientesIngresados);
            i++
        }
        preparacion = prompt("Ingrese como se prepara");
        recetaU.push({
            "nombre": nombreU,
            "ingredientes": ingredientes,
            "preparacion": preparacion,
        })
        console.log(recetaU);
        recetas.push(recetaU);
        console.log(recetas);
    })
    // crea una nueva receta para agregar al recetario
}
crearNuevaReceta();

var mostrarRecetaCreada = document.createElement("li");

function verRecetasCreadas(){
    verRecetas.addEventListener("click", (e) => {
        var k = 0;
        var l = 0;
        for(l = 0; l < recetas[k].length; l++){
                var recetaCreada = document.createElement("div");
                recetaCreada.innerText = "Receta creada: " + "nombre: " + recetas[k][l]["nombre"] + ", ingredientes: " + recetas[k][l]["ingredientes"] + " y preparación: " + recetas[k][l]["preparacion"];
                document.body.appendChild(recetaCreada);
        }
    });
}
verRecetasCreadas();

// Opcional: agregar cantidad necesaria de cada ingrediente para cada receta y verificar si se tiene suficiente para realizarla