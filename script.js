document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los grupos de productos
  const productGroups = document.querySelectorAll(".product-group");

  productGroups.forEach(group => {
    let currentIndex = 0;
    const products = group.querySelectorAll(".product-container");
    const prevButton = group.querySelector(".btn-left");
    const nextButton = group.querySelector(".btn-right");

    // Función para mostrar el producto en el índice especificado
    function showProduct(index) {
      products.forEach((product, idx) => {
        product.classList.toggle("active", idx === index);
      });
    }

    // Inicializa mostrando el primer producto
    showProduct(currentIndex);

    // Event listeners para los botones de ir al producto anterior y siguiente
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex === 0) ? products.length - 1 : currentIndex - 1;
      showProduct(currentIndex);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex === products.length - 1) ? 0 : currentIndex + 1;
      showProduct(currentIndex);
    });
  });
});
