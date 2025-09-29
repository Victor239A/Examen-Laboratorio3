import { centro } from "/componentes/formulario/formulario.js";
import { tareas } from "./componentes/tareas/tareas.js";

    let section = document.createElement('section');

    section.appendChild(centro());
    section.appendChild(tareas());

    
    document.body.appendChild(section);
