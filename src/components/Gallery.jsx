import { Link } from 'react-router-dom';
import galeria1 from '../assets/img/galeria1.jpg';
import galeria2 from '../assets/img/galeria2.jpg';
import galeria3 from '../assets/img/galeria3.jpg';
import galeria4 from '../assets/img/galeria4.jpg';
import galeria5 from '../assets/img/galeria5.jpg';
import galeria6 from '../assets/img/galeria6.jpg';
import galeria7 from '../assets/img/galeria7.jpg';
import galeria8 from '../assets/img/galeria8.jpg';
import '../styles/Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: '"La lección de anatomía del Dr. Nicolaes Tulp" - Rembrandt, 1632',
      image: galeria1,
      alt: 'Imagen histórica 1',
    },
    {
      id: 2,
      title: '"Ciencia y Caridad" - Pablo Picasso, 1897',
      image: galeria2,
      alt: 'Imagen histórica 2',
    },
    {
      id: 3,
      title: '"El Dr. Peán operando" - Lautrec, 1894',
      image: galeria3,
      alt: 'Imagen histórica 3',
    },
    {
      id: 4,
      title: '"Los apestados de Jaffa" - Eugène Delacroix, 1834',
      image: galeria4,
      alt: 'Imagen histórica 4',
    },
    {
      id: 5,
      title: '"El Doctor" - Norman Rockwell, 1938',
      image: galeria5,
      alt: 'Imagen histórica 5',
    },
    {
      id: 6,
      title: '"La lección de anatomía del Dr. Ruysch" - Jan Van Neck, 1683',
      image: galeria6,
      alt: 'Imagen histórica 6',
    },
    {
      id: 7,
      title: '"Principios del tratamiento con Radioterapia" - Chicotot, 1907.',
      image: galeria7,
      alt: 'Imagen histórica 7',
    },
    {
      id: 8,
      title: '"La sala de espera" - Makovsky, 1870',
      image: galeria8,
      alt: 'Imagen histórica 8',
    },
  ];

  return (
    <main>
      <section id="gallery" className="section gallery-section">
        <h2>Galería de Arte Médico</h2>
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-title">{item.title}</div>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        <Link to="/" className="btn-animated">
          Volver al menú principal
        </Link>
      </section>
    </main>
  );
};

export default Gallery;
