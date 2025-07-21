export const prerender = false;

import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nombre = formData.get('nombre');
    const correo = formData.get('correo');
    const telefono = formData.get('telefono');
    const mensaje = formData.get('mensaje');
    const recaptchaToken = formData.get('g-recaptcha-response');

    if(!recaptchaToken) {
      return new Response(JSON.stringify({ message: 'No existe un token de reCAPTCHA' }), { status: 400 });
    }

    const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
    const response = await fetch(recaptchaURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    
    const recaptchaData = await response.json();
    
    if(!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ message: 'Verificación fallida' }), { status: 400 });
    }
    
    //Send email with Resend
    const { data, error } = await resend.emails.send({
      from: 'info@johanmeneses.dev',
      to: ['johanmeneses@gmail.com'],
      subject: 'Nuevo mensaje de Portafolio - Studio Models',
      html: `
        <h1>Nuevo mensaje de Studio Models</h1>
        <p>Nombre: ${nombre}</p>
        <p>Correo: ${correo}</p>
        <p>Telefono: ${telefono}</p>
        <hr>
        <p>Mensaje:</p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      //Error in Resend
      console.error({ error });
      return new Response(JSON.stringify({ message: 'Error al enviar el correo' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Correo enviado correctamente' }), { status: 200 });

  } catch (e) {
    console.error({ e });
    return new Response(JSON.stringify({ message: 'Error en el servidor' }), { status: 500 });
  }
}