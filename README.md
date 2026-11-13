# Link-in-bio Neobrutalista Minimalista (Verde Menta)

Página web de tipo "Link-in-bio" (estilo Linktree), moderna, ligera y 100% responsive, construida con HTML5 semántico, CSS3 puro y JavaScript modular.

## Paleta de Colores
- Fondo principal: `#E2FCE6` (Verde menta claro y suave)
- Fondo de botones: `#C2F8CB` (Verde menta pastel)
- Textos, bordes, íconos y sombras: `#000000` (Negro puro)

## Características
- Vista centrada estilo móvil (ancho máximo de 480px en pantallas grandes).
- Botón superior derecho de 36x36px para copiar la URL al portapapeles con alerta flotante ("Enlace copiado").
- Cabecera con avatar circular de 96x96px, nombre de usuario en negrita (Plus Jakarta Sans, 18px) y biografía corta.
- Botones en forma de píldora con estética neobrutalista: borde sólido de 2px, sombra dura sin difuminar (`4px 5px 0px #000000`), desplazamiento físico al pasar el mouse (`:hover`) y efecto de hundimiento total al hacer clic (`:active`).
- Ícono a la izquierda, texto centrado matemáticamente y chevron/flecha a la derecha.
- Soporte para enlace desplegable (acordeón interactivo).
- Iconografía 100% Font Awesome v6.
- Estricta regla de cero emojis.

## Estructura de Archivos
- `index.html`: Estructura semántica de la página.
- `style.css`: Estilos, variables CSS, efectos neobrutalistas y responsividad.
- `script.js`: Funcionalidad de copiado al portapapeles y despliegue de acordeón.
- `avatar.svg`: Avatar gráfico vectorial de respaldo para funcionamiento sin conexión.

## Cómo Personalizar
1. **Cambiar Nombre y Biografía**: Edita las etiquetas `<h1 class="username">` y `<p class="bio">` en `index.html`.
2. **Modificar Enlaces y Botones**:
   - Cambia los atributos `href="https://..."` por tus URLs reales.
   - Para cambiar un ícono, reemplaza la clase Font Awesome en `<i class="fa-solid fa-..."></i>` o `<i class="fa-brands fa-..."></i>`.
3. **Cambiar Foto de Perfil**: Sustituye el atributo `src` de la etiqueta `<img>` con la ruta de tu foto personal o enlace directo.
