# Gestión de Pedidos - Proyecto Vite

Este proyecto es una aplicación web de gestión de pedidos donde los usuarios pueden agregar, buscar, filtrar y eliminar productos. Está desarrollado utilizando tecnologías web estándar (HTML, CSS y JavaScript) y utiliza **Vite** como herramienta para la creación del entorno de desarrollo.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Detalles del Código](#detalles-del-código)
- [Tecnologías Usadas](#tecnologías-usadas)

## Descripción General

Este proyecto simula un sistema de gestión de un menú de restaurante. Permite agregar productos mediante un formulario emergente (modal), almacenarlos en el navegador utilizando `localStorage`, y filtrar o buscar productos por categoría y precio. Además, incluye funcionalidades para eliminar productos y búsqueda en tiempo real.

## Características

1. **Agregar productos**: Puedes añadir nuevos productos con nombre, imagen, precio y categoría mediante un formulario en un modal.
2. **Almacenamiento en `localStorage`**: Los productos se almacenan en el navegador, de modo que persisten incluso después de cerrar la página.
3. **Filtrar productos**: Se puede filtrar por categoría (hamburguesas, papas, gaseosas, postres) y ordenar por precio (ascendente o descendente).
4. **Búsqueda en tiempo real**: Una barra de búsqueda permite buscar productos por nombre.
5. **Eliminar productos**: Los productos se pueden eliminar de la lista y también se actualizan en `localStorage`.

## Estructura del Proyecto

La estructura básica de archivos del proyecto es la siguiente:

```plaintext
📦 tu-proyecto-vite
├── 📁 public
│   └── index.html       # Archivo HTML principal
├── 📁 src
│   ├── assets           # Carpeta para recursos como imágenes o fuentes
│   ├── styles
│   │   └── style.css    # Archivo CSS para el estilo del proyecto
│   ├── scripts.js       # Archivo JS principal que contiene la lógica de la app
│   └── main.js          # Punto de entrada de la aplicación en Vite
├── 📄 package.json      # Dependencias y scripts del proyecto
└── 📄 vite.config.js    # Configuración de Vite
```

## Descripción de los archivos

 - `index.html`: El archivo HTML que contiene la estructura base de la aplicación. Define el modal para agregar productos, la barra de búsqueda, el filtro de categorías y el lugar donde se renderizan los productos.

 - `style.css`: El archivo CSS donde se definen los estilos para la interfaz. Controla el diseño de los productos, el modal, la barra de búsqueda y los botones de filtro.

 - `scripts.js`: Aquí está la lógica de la aplicación. Define cómo agregar productos, mostrarlos en la página, filtrar por categoría, buscar productos y eliminar productos.

 - `main.js`: Punto de entrada de Vite, que incluye el archivo scripts.js y otros componentes si es necesario.

## Instalación y Ejecución
### Requisitos Previos:
Asegúrate de tener instalado **Node.js** en tu computadora.
### Pasos para la Instalación:
1. **Clona el repositorio:**

    ``git clone https://github.com/tu-usuario/tu-repositorio.git``

2. **Instala las dependencias:** Navega a la carpeta del proyecto y ejecuta el siguiente comando:

    ``npm install``

3. **Inicia el servidor de desarrollo:** Para ejecutar el proyecto en un entorno de desarrollo local, utiliza:

    ``npm run dev``

4. Abre la aplicación en el navegador: Después de ejecutar el comando anterior, verás un mensaje en la terminal con la URL del servidor de desarrollo, http://localhost:5173/. Abre esa URL en tu navegador para ver la aplicación.

## Detalles del Código
1. **Modal para Agregar Productos**

    El modal para agregar productos se abre cuando el usuario hace clic en el botón Agregar Producto. Este formulario permite añadir nuevos productos con campos para el nombre, la URL de la imagen, el precio y la categoría. Al enviar el formulario, el producto se guarda en localStorage y se muestra en la página.

2. **LocalStorage**

    El almacenamiento en localStorage permite que los productos persistan en el navegador incluso después de recargar la página. Cada vez que se agrega o elimina un producto, la lista de productos se actualiza tanto en la interfaz como en localStorage.

3. **Mostrar y Eliminar Productos**

    Los productos se muestran dinámicamente en la sección productos. Cada producto tiene un botón de "Eliminar", que elimina el producto de la lista y lo actualiza tanto en la interfaz como en localStorage.

4. **Filtros y Búsquedas**

    - **Filtros:** Se pueden filtrar los productos por categoría (hamburguesa, papas, gaseosa, postre) o por precio (ascendente o descendente). Al hacer clic en los botones de filtro, se actualiza la vista con los productos filtrados.
    - **Búsqueda:** La barra de búsqueda permite encontrar productos por nombre. La búsqueda se realiza en tiempo real a medida que el usuario escribe.
## Tecnologías Usadas

- **HTML5:** Estructura básica del contenido.

- **CSS3:** Estilización del proyecto.

- **JavaScript (ES6+):** Para la lógica del frontend, incluyendo la manipulación del DOM, el manejo de eventos y el almacenamiento en localStorage.
