# Studio Models - Landing Page Profesional

**Studio Models** es una plataforma web moderna, exclusiva y sofisticada diseñada para un estudio de modelos. Este proyecto fue desarrollado con un enfoque en la experiencia de usuario (UX), el rendimiento y una estética visual impactante que refleja la exclusividad de la marca.

Este proyecto forma parte de mi portafolio profesional, demostrando habilidades en desarrollo web moderno, integración de servicios externos y optimización de rendimiento.

---

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework web para la construcción de sitios rápidos y centrados en el contenido.
- **JavaScript (ES6+)**: Lógica interactiva y manipulaciones del DOM.
- **CSS3 (Moderno)**: Uso de nesting, Grid, Flexbox y animaciones personalizadas para un diseño responsive y elegante.
- **[Resend](https://resend.com/)**: Integración de API para el manejo eficiente de envíos de formularios de contacto.
- **Google reCAPTCHA v3**: Seguridad implementada en el lado del servidor para prevenir spam.
- **Vercel**: Plataforma de despliegue optimizada para aplicaciones Astro.

## ✨ Características Principales

- **Diseño Responsive:** Adaptabilidad total a dispositivos móviles, tablets y escritorio.
- **Arquitectura de Componentes:** Desarrollo modular utilizando componentes de Astro para facilitar el mantenimiento.
- **Galería Interactiva:** Visualización dinámica de contenido multimedia.
- **Formulario de Contacto Funcional:** Validación en el servidor (API Endpoint) con envío de correos automáticos.
- **Animaciones On-Scroll:** Experiencia fluida y dinámica mediante clases de animación activadas por el desplazamiento del usuario.
- **Slider Dinámico:** Implementación personalizada utilizando `ResizeObserver` para un ajuste perfecto de proporciones.

## 🛠️ Instalación y Configuración

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/studio-models.git
   cd studio-models
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales:
   ```env
   RESEND_API_KEY=tu_api_key_aqui
   RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
   ```

4. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   El sitio estará disponible en `http://localhost:4321`.

---

Desarrollado con ❤️ por [Johan Meneses](https://johanmeneses.dev)
