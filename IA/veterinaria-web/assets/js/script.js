const boton = document.getElementById('cambiarColorBtn');

boton.addEventListener('click', () => {
  const colores = ['#a8e6cf', '#dcedc1', '#ffffff', '#f0f9e8'];
  // Elegir un color aleatorio
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
});