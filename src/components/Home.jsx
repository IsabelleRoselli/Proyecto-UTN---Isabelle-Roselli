import { useNavigate } from 'react-router-dom';
import principalImg from '../assets/img/principal.jpg';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-image-container">
        <img
          src={principalImg}
          alt="Imagen central medicina histórica"
          title="Oh no, interrumpiste la clase y ahora todos te están mirando"
        />
      </div>
      <main>
        <section id="home" className="section home-section">
          <h2>Bienvenido a las Curiosidades Históricas de la Medicina</h2>
          <p>
            Descubre datos fascinantes y poco conocidos sobre la evolución de la
            medicina a lo largo de la historia.
          </p>
          <button className="btn-animated" onClick={() => navigate('/cards')}>
            Explorar
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
