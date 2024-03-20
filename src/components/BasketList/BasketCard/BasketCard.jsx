import "./style.scss";

import { Link } from "react-router-dom";

const BasketCard = ({
  product,
  deleteProduct,
  increaseCount,
  decreaseCount,
  changeCount,
}) => {
  const { id, img, name, price, count } = product;

  return (
    <div className="basket-card">
      <Link to={"/cardproduct"}>
        <figure>
          <img
            src={"./img/catalog/" + img}
            alt=""
            className="basket-card__image"
          />
          <figcaption className="basket-card__product-name">{name}</figcaption>
        </figure>
      </Link>
      <div className="basket-card__panel">
        <div className="basket-card__price">
          <p className="basket-card__price-product">{price}</p>
          <p className="basket-card__price-all">{price * count}</p>
        </div>
        <div className="basket-card__count-product">
          <button
            className="basket-card__count-buttons basket-card__count-minus"
            onClick={() => {
              decreaseCount(id);
            }}
          ></button>
          <input
            type="number"
            min="0"
            max="30"
            value={count}
            onChange={(e) => {
              changeCount(id, +e.target.value);
            }}
          />
          <button
            className="basket-card__count-buttons basket-card__count-plus"
            onClick={() => increaseCount(id)}
          ></button>
        </div>
        <button
          className="basket-card__delete-buttons"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          <img src="/img/icon/basket-delete.svg" alt="basketGoods" />
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
