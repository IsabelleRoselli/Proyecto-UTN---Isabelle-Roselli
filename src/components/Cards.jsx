import { useNavigate } from 'react-router-dom';
import Card from './Card';
import cards1 from '../assets/img/cards1.jpg';
import cards2 from '../assets/img/cards2.jpg';
import cards3 from '../assets/img/cards3.jpg';
import cards4 from '../assets/img/cards4.png';
import cards5 from '../assets/img/cards5.jpg';
import cards6 from '../assets/img/cards6.jpg';
import '../styles/Cards.css';

const Cards = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 1,
      image: cards1,
      title: 'El primer estetoscopio era un tubo de madera',
      description:
        'En 1816, René Laennec inventó el estetoscopio porque le parecía poco apropiado apoyar su oreja directamente sobre el pecho de una paciente mujer. El primero era solo un cilindro de madera.',
    },
    {
      id: 2,
      image: cards2,
      title: 'El cerebro no siente dolor',
      description:
        'Aunque es el órgano que procesa las sensaciones, el tejido cerebral no tiene receptores del dolor. Por eso se pueden hacer cirugías cerebrales con el paciente despierto.',
    },
    {
      id: 3,
      image: cards3,
      title: 'El origen de las vacunas viene de la viruela bovina',
      description:
        'Edward Jenner observó que las ordeñadoras que contraían viruela vacuna (cowpox) no enfermaban de viruela humana. En 1796 inoculó el virus vacuno a un niño y así nació la primera vacuna.',
    },
    {
      id: 4,
      image: cards4,
      title: 'El corazón puede seguir latiendo fuera del cuerpo',
      description:
        'Si recibe oxígeno y nutrientes adecuados, el corazón humano late de manera autónoma gracias a su propio sistema de conducción, incluso fuera del organismo.',
    },
    {
      id: 5,
      image: cards5,
      title: 'Los recién nacidos tienen más huesos que los adultos',
      description:
        'Un bebé nace con unos 300 huesos, muchos de los cuales con el tiempo se fusionan, hasta quedar en los 206 huesos del adulto.',
    },
    {
      id: 6,
      image: cards6,
      title: 'La sangre de los cangrejos herradura se usa en medicina',
      description:
        'Se utiliza para detectar endotoxinas bacterianas en fármacos y vacunas. Es tan valiosa que llega a costar más que el oro.',
    },
  ];

  return (
    <main>
      <section id="curiosities" className="section curiosities-section">
        <h2>Curiosidades Históricas</h2>
        <div className="curiosities-container">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <button className="btn-animated" onClick={() => navigate('/')}>
          Volver al menú principal
        </button>
      </section>
    </main>
  );
};

export default Cards;
