document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.querySelector(".close");
  const form = document.getElementById("modalForm");
  const productList = document.getElementById("productos");
  const searchBar = document.getElementById("searchBar");
  
  // Productos iniciales si el localStorage está vacío
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  if (productos.length === 0) {
    productos = [
      {
        nombre: "Hamburguesa Clásica",
        imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar",
        precio: 5.99,
        categoria: "hamburguesa",
      },
      {
        nombre: "Papas Fritas",
        imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kEXemacS/200/200/original?country=ar",
        precio: 2.99,
        categoria: "papas",
      },
      {
        nombre: "Coca-Cola",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzj4lOf6fA2rrn-s-u-N2O_lhEOFkw0eP4HscqNj7lzepKvvyOOuUAGxzsurQI4NdyqM&usqp=CAU",
        precio: 1.99,
        categoria: "gaseosa",
      },
      {
        nombre: "McFlurry kit-kat",
        imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXpFS9c/200/200/original?country=ar",
        precio: 3.5,
        categoria: "postre",
      }
    ];
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  // Abrir y cerrar el modal
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Agregar producto desde el modal
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("modalNombre").value;
    const imagen = document.getElementById("modalImagen").value;
    const precio = document.getElementById("modalPrecio").value;
    const categoria = document.getElementById("modalCategoria").value;

    const producto = { nombre, imagen, precio: parseFloat(precio), categoria };
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos(productos);
    form.reset();
    modal.style.display = "none";
  });

  // Mostrar productos
  function mostrarProductos(productosFiltrados) {
    productList.innerHTML = "";
    productosFiltrados.forEach((producto, index) => {
      productList.innerHTML += `
              <div class="producto">
                  <h3>${producto.nombre}</h3>
                  <img src="${producto.imagen}" alt="${producto.nombre}">
                  <p>Precio: $${producto.precio}</p>
                  <button class="delete-btn" data-index="${index}">Eliminar</button>
              </div>
          `;
    });

    // Agregar eventos a los botones "Eliminar"
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        eliminarProducto(index);
      });
    });
  }

  // Eliminar producto
  function eliminarProducto(index) {
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos(productos);
  }

  // Filtros de productos
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Eliminar la clase 'selected' de todos los botones
      filterButtons.forEach(btn => btn.classList.remove("selected"));
      
      // Añadir la clase 'selected' al botón que se clickeó
      button.classList.add("selected");
      
      // Lógica para filtrar productos
      let productosFiltrados = productos;
      const category = button.getAttribute("data-category");
      const sort = button.getAttribute("data-sort");
  
      if (category && category !== "all") {
        productosFiltrados = productos.filter((p) => p.categoria === category);
      }
  
      if (sort === "asc") {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
      } else if (sort === "desc") {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
      }
  
      mostrarProductos(productosFiltrados);
    });
  });

  // Búsqueda de productos
  searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value.toLowerCase();
    const productosFiltrados = productos.filter((p) =>
      p.nombre.toLowerCase().includes(searchValue)
    );
    mostrarProductos(productosFiltrados);
  });

  // Cargar productos al iniciar
  mostrarProductos(productos);

  // Animaciones para el modal
  document.getElementById("openModalBtn").addEventListener("click", function () {
    const modal = document.getElementById("productModal");
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10); // Delay para activar la animación
  });

  document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("productModal");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Esperar a que termine la animación antes de ocultar
  });

  window.onclick = function (event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  };
});
