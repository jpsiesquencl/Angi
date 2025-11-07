const texto = "Te amo mi muñequita";
const destino = document.getElementById("mensaje");
let i = 0;

function escribir() {
  if (i < texto.length) {
    destino.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 200); // velocidad
  } else {
    // cuando termina, añadimos la clase "fin"
    destino.classList.add("fin");
  }
}
escribir();
