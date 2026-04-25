# Studio Models - Project Context

This project is a modern, exclusive, and sophisticated web platform designed for a modeling studio. It is built with **Astro** and optimized for performance and visual aesthetics.

## 🚀 Technical Stack

- **Framework:** [Astro](https://astro.build/) (SSR Mode)
- **Styling:** SCSS, CSS3 (Modern), and Bootstrap 5 (Static CSS).
- **Icons & Graphics:** SVG icons and high-quality background images.
- **Backend/API:** Node.js (Astro API Routes).
- **Integrations:**
    - **Resend:** API for handling contact form emails.
    - **Google reCAPTCHA v3:** Server-side security for form submission.
    - **GLightbox:** Interactive multimedia gallery.
- **Deployment:** Vercel.

## 📁 Project Structure

- `src/pages/`: Contains the main application routes and API endpoints.
    - `api/contacto.js`: Server-side logic for form validation and email sending.
- `src/layouts/`:
    - `MainLayout.astro`: The primary wrapper for all pages, including SEO meta tags, Google reCAPTCHA scripts, and global styles.
- `src/components/`: Modular Astro components (Header, Footer, Nosotros, Beneficios, etc.).
- `src/assets/`: Images and icons used within components.
- `src/styles/`:
    - `master.css`: Global base styles.
    - `components/`: Component-specific SCSS files.
    - `pages/`: Page-specific SCSS files.
- `public/`: Static assets including vendor CSS/JS (Bootstrap, GLightbox) and images.

## 🛠️ Key Commands

- `pnpm dev`: Starts the development server at `http://localhost:4321`.
- `pnpm build`: Builds the project for production (Vercel target).
- `pnpm preview`: Previews the production build locally.
- `pnpm astro ...`: Runs Astro-specific CLI commands.

## 💡 Development Conventions

- **Component-Based Architecture:** Use Astro components for UI elements to keep the codebase modular and maintainable.
- **Server-Side Logic:** Sensitive operations like email sending and reCAPTCHA verification are handled in `src/pages/api/` to protect API keys.
- **Environment Variables:**
    - `RESEND_API_KEY`: Required for email functionality.
    - `RECAPTCHA_SECRET_KEY`: Required for server-side reCAPTCHA validation.
    - `PUBLIC_RECAPTCHA_SITE_KEY`: Required for client-side reCAPTCHA rendering.
- **Styling:** Prefer SCSS for complex component styling while leveraging CSS variables defined in `master.css` for consistency.
- **Hydration:** Use `is:inline` or standard Astro hydration directives carefully to maintain performance.

## 🔒 Security

- Do not expose `RESEND_API_KEY` or `RECAPTCHA_SECRET_KEY` on the client side.
- Always use the `POST` method for API endpoints handling sensitive data.
- reCAPTCHA verification is enforced in the `contacto.js` API route.
