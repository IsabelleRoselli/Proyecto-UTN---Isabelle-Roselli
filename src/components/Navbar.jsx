import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="El arte de la Medicina" />
          <p></p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="btn-animated">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/cards" className="btn-animated">
              <i className="fas fa-lightbulb"></i> Curiosidades
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="btn-animated">
              <i className="fas fa-image"></i> Galería
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn-animated">
              <i className="fas fa-envelope"></i> Contacto
            </Link>
          </li>
        </ul>
        <div className="frase-efecto">
          Donde quiera que se ame el arte de la medicina,<br />
          se ama también a la humanidad.<br />
          <span className="frase-autor">- Platón</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
