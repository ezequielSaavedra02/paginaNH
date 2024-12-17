document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");

    // Agregar el contenido del botón
    whatsappButton.innerHTML = `
        <a href="https://wa.me/+543888465742?text=Hola%20me%20gustaría%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>
    `;
});
//JAVA SCRIPT DE INSCRIPCIONES
//CARTEL DE AVISO!
// Desaparece automáticamente después de 10 segundos
setTimeout(() => {
  const cartel = document.querySelector('.cartel-flotante');
  if (cartel) {
    cartel.classList.remove('show'); // Ocultar Bootstrap alert
    cartel.style.display = 'none'; // Remover visualmente
  }
}, 10000); // 10 segundos

// Función para filtrar noticias por categoría
function filterNews(category) {
  // Selecciona todas las noticias
  const newsItems = document.querySelectorAll('.news-item');

  // Itera sobre cada tarjeta de noticia
  newsItems.forEach((item) => {
      // Si la categoría es "all", muestra todas las tarjetas
      if (category === 'all') {
          item.style.display = 'block';
      } else {
          // Si no, muestra solo las tarjetas que coincidan con la categoría
          const itemCategory = item.getAttribute('data-category');
          if (itemCategory === category) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      }
  });
}
