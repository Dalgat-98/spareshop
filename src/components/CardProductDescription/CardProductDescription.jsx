import "./style.scss";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import CardProductPickup from "./CardProductPickup/CardProductPickup";

const CardProductDescription = () => {
  const [activeCardDescription, setActiveCardDescription] = useState(
    "cardProductInformation"
  );

  const cardProductInfoNavList = {
    cardProductInformation: "О товаре",
    cardProductCharacteristics: "Характеристики",
    cardProductReviews: "Отзывы",
    cardProductPickup: "Самовывоз",
    cardProductDelivery: "Доставка",
    cardProductServices: "Услуги",
    cardProductBusiness: "Бизнесу",
  };

  const cardProductInfoNavLi = [];

  for (let item in cardProductInfoNavList) {
    cardProductInfoNavLi.push(
      <li key={cardProductInfoNavLi[item]}>
        {item === activeCardDescription ? (
          <Link to={`${item}`} className="nav__link nav__link--active">
            {cardProductInfoNavList[item]}
          </Link>
        ) : (
          <Link
            to={`${item}`}
            className="nav__link"
            onClick={() => setActiveCardDescription(item)}
          >
            {cardProductInfoNavList[item]}
          </Link>
        )}
      </li>
    );
  }

  return (
    <section className="card-description">
      <nav className="card-description__nav">
        <ul> {cardProductInfoNavLi}</ul>
      </nav>
      <div className="card-description__item">
        <Outlet />
      </div>
    </section>
  );
};

export default CardProductDescription;
