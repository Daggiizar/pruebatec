# Prueba Técnica - Backend en Ruby on Rails y Frontend en React + Vite

## Descripción

Esta es una prueba técnica en la que se implementa un sistema de carrito de compras con un backend desarrollado en Ruby on Rails y un frontend en React con Vite.
El sistema permite a los usuarios agregar productos al carrito y a través de un presupuesto ingresado, encontrar la mejor combinación de productos para comprar sin 
exceder dicho presupuesto.

El backend maneja las operaciones del carrito y los productos, mientras que el frontend presenta una interfaz interactiva donde los usuarios pueden ver los productos, 
agregar al carrito y calcular las mejores combinaciones dentro de su presupuesto.

La aplicación está completamente funcional tanto en el backend como en el frontend y ha sido desplegada en Railway (para el backend) y Vercel (para el frontend).

## Tecnologías Utilizadas

- **Backend**: Ruby on Rails
- **Frontend**: React + Vite
- **Base de datos**: En memoria (sin persistencia)
- **Despliegue Backend**: Railway
- **Despliegue Frontend**: Vercel

## Instrucciones para Ejecutar el Proyecto Localmente

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/pruebatec.git
```

## Backend

1. Navegar a la carpeta del backend:

    ```bash
    cd backend
    ```

2. Instalar las dependencias:

    ```bash
    bundle install
    ```

3. Iniciar el servidor:

    ```bash
    rails s
    ```

El backend estará corriendo en [http://localhost:3000](http://localhost:3000).

## Frontend

1. Navegar a la carpeta del Frontend:

    ```bash
    cd frontend
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

3. Iniciar el servidor:

    ```bash
    npm run dev
    ```

- **Frontend**: [https://pruebatec-nine.vercel.app/](https://pruebatec-nine.vercel.app/)

## Funcionalidad del Proyecto

### Endpoints del Backend

- **GET** `/products`: Devuelve la lista de productos disponibles.
- **GET** `/cart`: Devuelve los productos que se han agregado al carrito.
- **POST** `/cart`: Agrega un producto al carrito.

### Funcionalidad del Frontend

**Mostrar lista de productos**: El código para obtener los productos y mostrarlos está en `ProductList.jsx`, donde se hace una llamada a la API para obtener los productos
y se renderizan en la pantalla.

- **Agregar productos al carrito**: Al hacer clic en el botón "Agregar al carrito", el producto se agrega al carrito utilizando un estado local.
El carrito se actualiza dinámicamente en la misma página.

- **Función `findBestCombination`**: Esta función se encuentra en `utils.js` y se utiliza para determinar la mejor combinación de productos en base al presupuesto
ingresado por el usuario.

## URL Funcional

Para acceder a la aplicación desplegada al siguiente enlaces:

- **Aplicación desplegada**: https://pruebatec-nine.vercel.app/

