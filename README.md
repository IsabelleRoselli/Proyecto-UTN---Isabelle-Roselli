# El Arte de la Medicina

Una aplicación web interactiva que explora curiosidades históricas de la medicina, creada con React y Vite.

## Descripción

Este proyecto presenta una colección de datos fascinantes sobre la historia de la medicina, incluyendo curiosidades médicas, una galería de arte médico histórico, y un formulario de contacto interactivo. Creada por Isabelle Roselli, estudiante de Medicina apasionada por la historia y el arte que rodean este oficio.

## Características

- **React + Vite**: Desarrollo moderno con Hot Module Replacement (HMR)
- **React Router**: Navegación fluida entre páginas sin recargas
- **Componentes Modulares**: Arquitectura escalable y mantenible
- **Gestión de Estado**: useState para formularios controlados
- **Bootstrap**: Estilos responsivos para navbar y tarjetas
- **Font Awesome**: Iconografía moderna
- **Diseño Responsivo**: Optimizado para todos los dispositivos

## Instalación y Uso

### Prerequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/IsabelleRoselli/Proyecto-UTN---Isabelle-Roselli.git

# Navegar al directorio del proyecto
cd Proyecto-UTN---Isabelle-Roselli

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## Despliegue en GitHub Pages

Este proyecto está configurado para ser desplegado en GitHub Pages. Para desplegar:

### Opción 1: Despliegue Manual

1. Construir el proyecto:
   ```bash
   npm run build
   ```

2. El directorio `dist/` contiene los archivos listos para producción

3. Configurar GitHub Pages para servir desde el directorio `dist/` o usar GitHub Actions

### Opción 2: GitHub Actions (Recomendado)

El proyecto incluye la configuración necesaria para GitHub Pages con:
- Ruta base configurada: `/Proyecto-UTN---Isabelle-Roselli/`
- Soporte para enrutamiento SPA mediante `404.html`
- Todos los assets correctamente referenciados

**Nota**: El proyecto usa React Router con `BrowserRouter`, y el sistema de redirección mediante `404.html` asegura que todas las rutas funcionen correctamente en GitHub Pages.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx      # Barra de navegación
│   ├── Home.jsx        # Página de inicio
│   ├── Cards.jsx       # Contenedor de curiosidades
│   ├── Card.jsx        # Tarjeta individual
│   ├── Gallery.jsx     # Galería de imágenes
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── styles/
│   ├── Global.css      # Estilos globales
│   ├── Navbar.css      # Estilos de navegación
│   ├── Home.css        # Estilos de inicio
│   ├── Cards.css       # Estilos de tarjetas
│   ├── Card.css        # Estilos de tarjeta individual
│   ├── Gallery.css     # Estilos de galería
│   ├── Contact.css     # Estilos de contacto
│   └── Footer.css      # Estilos de pie de página
├── assets/
│   └── img/            # Imágenes del proyecto
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## Páginas

### Home
Página de bienvenida con imagen principal y botón de exploración.

### Curiosidades
Seis tarjetas interactivas con datos fascinantes sobre la historia de la medicina:
- El primer estetoscopio
- El cerebro no siente dolor
- El origen de las vacunas
- El corazón autónomo
- Huesos de recién nacidos
- Sangre de cangrejos herradura

### Galería
Colección de ocho pinturas históricas relacionadas con la medicina:
- "La lección de anatomía del Dr. Nicolaes Tulp" - Rembrandt
- "Ciencia y Caridad" - Pablo Picasso
- Y más...

### Contacto
Formulario interactivo con campos controlados:
- Nombre
- Email
- Teléfono
- Asunto (selector)
- Novedades (radio buttons)
- Comentario

Los datos se capturan con React useState y se registran en la consola al enviar.

## Tecnologías Utilizadas

- **React 19.2.0**: Biblioteca de UI
- **React Router DOM 7.1.3**: Enrutamiento
- **Vite 7.2.4**: Build tool
- **Bootstrap 5.3.3**: Framework CSS
- **ESLint**: Linting de código
- **Font Awesome 6.4.0**: Iconos
- **Google Fonts**: Tipografías (Merriweather, Roboto, Dancing Script)

## Autora

**Isabelle Roselli**
- Instagram: [@belleroselli](https://instagram.com/belleroselli)
- Estudiante de Medicina

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
