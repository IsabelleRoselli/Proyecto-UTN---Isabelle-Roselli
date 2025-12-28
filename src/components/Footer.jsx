import logo from '../assets/img/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Logo El arte de la Medicina" />
      </div>
      <div className="footer-info">
        <div className="footer-section about">
          <h3>Sobre</h3>
          <p>
            Creada por Isabelle Roselli, estudiante de Medicina y apasionada por
            la historia y el arte que rodean este oficio, la página tiene como
            objetivo compartir curiosidades, conocimientos que inspiran ¡y mucho más!
          </p>
        </div>
        <div className="footer-section social">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a
              href="mailto:xxxxx@xxxxx.com"
              aria-label="Correo electrónico"
              title="xxxxx@xxxxx.com"
              target="_blank"
              rel="noopener"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://instagram.com/belleroselli"
              aria-label="Instagram"
              title="@belleroselli"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="tel:+541112345678"
              aria-label="Teléfono"
              title="+54 11 1234 5678"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
