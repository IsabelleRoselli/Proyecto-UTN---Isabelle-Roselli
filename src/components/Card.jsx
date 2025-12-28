import '../styles/Card.css';

const Card = ({ image, title, description }) => {
  return (
    <article className="curiosity-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Card;
