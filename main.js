/* Definicion de variables */

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

/* Agregamos un listener para el boton de agregar tareas */

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    /*Creamos la variable text, que va a conenter el valor que ingresa el usuario*/
    
    const text = input.value;

    /*Agregamos verificación, si el campo está vació, no agregara tareas, de lo contrario agregará la tarea en un elemento <li>, creará un <p> y con el metodo .textContent asigrnará el valor que tenga la variable text al elemeto <p>*/

    if (text !=="") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    /*con el metodo .appendChild, agregamos a el elemento <li> un elemento <p>, a la vez creamos el boton que tendrá la función de borrar el elemento y por último agregará elemento <li> a la lista <ul>*/

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    /*Con el metodo .value volvemos a poner en vacio el formulario y con el metodo .style.display="none" ocultamos el <div> que contiene el <p>*/

    input.value = "";
    empty.style.display = "none";
    }
});


/*Creamos la funcion que crea el boton para borrar la tarea*/

function addDeleteBtn() {
    
    /*Declaramos la variable y con el metodo .createElement creamos el botón*/
    
    const deleteBtn = document.createElement("button");

    /*El botón tendrá como contenido una "X" a modo de simbolizar el icono para cerrar/borrar*/

    deleteBtn.textContent ="X";
    deleteBtn.className = "btn-delete";

    /*Agregamos un listener que cuando escuche un evento que tomara el elemento padre y lo removera del <ul> eliminandose por completo el item */

    deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    /*Declaramos una variable items que seleccionara todos los elementos <li> y validará si existen o no*/

    const items = document.querySelectorAll("li");

    /*Si no existen elementos, mostrará el <div> con el mensaje en el elento <p>*/

    if (items.length === 0) {
    empty.style.display = "block";
    }
});

    return deleteBtn;
}