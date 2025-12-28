import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    news: 'no',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Formulario enviado. Revisa la consola para ver los datos.');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      news: 'no',
      comment: '',
    });
  };

  return (
    <main>
      <section id="contact" className="section contact-section">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+54 11 1234 5678"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Asunto:</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona un tema
              </option>
              <option value="consulta">Consulta general</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="colaboracion">Colaboración</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label>¿Deseas recibir novedades?</label>
            <div>
              <input
                type="radio"
                id="news-yes"
                name="news"
                value="sí"
                checked={formData.news === 'sí'}
                onChange={handleChange}
              />
              <label htmlFor="news-yes">Sí</label>
              <input
                type="radio"
                id="news-no"
                name="news"
                value="no"
                checked={formData.news === 'no'}
                onChange={handleChange}
              />
              <label htmlFor="news-no">No</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comentario:</label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn-animated">
              Enviar
            </button>
            <button
              type="button"
              className="btn-animated"
              onClick={handleReset}
            >
              Limpiar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
