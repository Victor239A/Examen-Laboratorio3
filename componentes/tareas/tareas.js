export function tareas(){

    let seccion = document.createElement('section');
    seccion.className = "seccion";

    let title = document.createElement('h1');
    title.className = "title";
    title.innerText = "Tarea 1";
    seccion.appendChild(title);
  
   
    return seccion;

}