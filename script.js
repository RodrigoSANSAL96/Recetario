var recetas = [];
var ingredientesDisponibles = [];

const agregar = document.createElement("button");
const encontrar = document.createElement("button");
const crear = document.createElement("button");

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

const mostrarRecetaEncontrada = document.createElement("p");

function encontrarReceta() {
    encontrar.addEventListener("click", (e) => {
        for(i = 0; i < recetas.length ; i++){
            for(j = 0; j < ingredientesDisponibles.length; j++){
                if(ingredientesDisponibles[j] == recetas[i]["ingredientes"]){
                    var ingredientesRecetaEncontrada = recetas[i]["ingredientes"];
                    var preparacionRecetaEncontrada = recetas[i]["preparacion"];
                    mostrarRecetaEncontrada.type = "text";
                    mostrarRecetaEncontrada.innerText = "Ingredientes de la receta encontrada: " + ingredientesRecetaEncontrada + " " + ". Preparación de la receta encontrada: " + preparacionRecetaEncontrada;
                    document.body.appendChild(mostrarRecetaEncontrada);
                };
            }
        }
    });
}
encontrarReceta();
    // busca cual receta se puede hacer en base a los ingredientes disponibles agregados
    // se muestran los ingredientes y la preparación 

    
var ingredientes = [" "];
var preparacion = " ";
function crearNuevaReceta() {
    crear.addEventListener("click", (e) => {
        cantidad = prompt("Ingrese la cantidad de ingredientes que lleva la receta");
        var i = 0;
        while(i < cantidad){
            ingredientes = prompt("Ingrese un ingrediente");
            recetas.push({
                "ingredientes": ingredientes,
            });
            i++;
        }
        preparacion = prompt("Ingrese la preparación de la receta");
        recetas.push({
            "preparacion": preparacion,
        })
        console.log(recetas);
    })
    // crea una nueva receta para agregar al recetario
}
crearNuevaReceta();

// Opcional: agregar cantidad necesaria de cada ingrediente para cada receta y verificar si se tiene suficiente para realizarla