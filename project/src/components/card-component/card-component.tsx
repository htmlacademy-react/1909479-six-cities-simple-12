import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardProps = {
  offer: Offer;
  onMouseOverHandler: (id: string) => void;
}

function CardComponent ({offer, onMouseOverHandler}: CardProps) : JSX.Element {
  const { isPremium, previewImage, price, rating, title, type, id} = offer;
  const LinkToRoom = `${AppRoute.Room}/${offer.id}`;

  return (
    <article onMouseOver={() => onMouseOverHandler(id)} className="cities__card place-card">
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={LinkToRoom}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={LinkToRoom}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardComponent;
