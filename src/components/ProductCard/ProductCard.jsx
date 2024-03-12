import "./style.scss";

import ProductTitleBanner from "../HelpItems/ProductTitleBanner/ProductTitleBanner";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const fullName =
    product.name +
    " " +
    product.country +
    " " +
    product.brand +
    "-" +
    product.model +
    " " +
    product.diameter +
    "/" +
    product.profile +
    "/" +
    product.width;

  return (
    <Link to="/cardproduct" className="product-card">
      {product.action && <ProductTitleBanner text={product.action} />}

      <div className="product-card__properties">
        <div>
          {product.season === "summer" && (
            <img src="./img/icon/sun.svg" alt="Sun" />
          )}
          {product.season === "winter" && (
            <img src="./img/icon/snowflake.svg" alt="Snowflake" />
          )}
        </div>

        <button>
          <img src="./img/icon/like.svg" alt="Like" />
        </button>
      </div>

      <figure>
        {/* <img src={`./img/catalog/${product.img}`} alt={product.img} /> */}
        <img src={`./img/catalog/tire-1.jpg`} alt={product.img} />
        <figcaption>{fullName}</figcaption>
      </figure>

      <div className="product-card__availability">
        {product.price === "availability" && (
          <div className="product-card__not">
            <p>нет в наличии</p>
            <a href="#!" className="product-card__report">
              Сообщить о поступлении
            </a>
          </div>
        )}
        {product.price !== "availability" && (
          <div className="product-card__buy">
            <span className="product-card__price">{product.price}</span>
            <button className="product-card__button">
              <img src="./img/icon/basket-card.svg" alt="Basked" />
            </button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
