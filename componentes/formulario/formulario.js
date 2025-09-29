
export function centro() {
    let div = document.createElement("div");
    div.className = "centro";
   
    let total = document.createElement("h2");
    total.className = "total";
  
    let inputProducto = document.createElement("input");
    inputProducto.type = "text";
    inputProducto.placeholder = "";
  
    
  
    let btn = document.createElement("button");
    btn.textContent = "Agregar";
  
    let lista = document.createElement("ul");
    lista.className = "lista";


    div.appendChild(total);
    div.appendChild(inputProducto);
   
    div.appendChild(btn);
    div.appendChild(lista);
    
    return div;
    }