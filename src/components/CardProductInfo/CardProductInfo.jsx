import "./style.scss";

const CardProductInfo = ({ product }) => {
  const fullName =
    product.name +
    " " +
    product.country +
    " " +
    product.brand +
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
    <section className="card-container">
      <p>Главная - Шины - Шины зимние</p>
      <figure className="card">
        <div className="card__title">
          <div className="card__action-banner">{product.action}</div>
          <div className="card__properties">
            {product.season === "summer" && (
              <img src="./img/icon/sun.svg" alt="Sun" className="card__icon" />
            )}
            {product.season === "winter" && (
              <img
                src="./img/icon/snowflake.svg"
                alt="Snowflake"
                className="card__icon"
              />
            )}
          </div>
          <div className="card__image">
            <img src={`./img/catalog/${product.img}`} alt={product.img} />
          </div>
          <div className="card__price">
            <span className="card__old-price">12 981</span>
            <span className="card__actual-price">15 981</span>
          </div>
          <a href="#!" className="card__message">
            Нашли дешевле? Снизим цену!
          </a>
        </div>
        <figcaption className="card__description">
          <h3>{fullName}</h3>
          <p className="card__code">Код товара: {product.id}</p>
          <div className="card__like-grade">
            <button className="card__like">
              <img
                src="./img/icon/like.svg"
                alt="like"
                className="card__icon"
              />
            </button>
            <img
              src="./img/icon/popular-product.svg"
              alt="popular"
              className="card__icon"
            />
            <div className="card__product-grade"></div>
          </div>
          <div className="product-info">
            <div className="product-info__heading">
              <h4 className="product-info__heading--active">Характеристики</h4>
              <h4>Наличие в автосалоне</h4>
            </div>
            <div className="product-info__characteristics">
              <ul>
                <li>
                  <span>Производитель</span>
                  <span>{product.brand}</span>
                </li>
                <li>
                  <span>Диаметр</span>
                  <span>{product.diameter}</span>
                </li>
                <li>
                  <span>Сезон</span>
                  <span>{product.season}</span>
                </li>
                <li>
                  <span>Индекс скорости нагрузки</span>
                  <span>{"index"}</span>
                </li>
                <li>
                  <span>Серия</span>
                  <span>{"seria"}</span>
                </li>
              </ul>
              <button className="product-info__more">Показать еще</button>
            </div>
            {/* <div className="product-info__availability"></div> */}
          </div>
          <button className="card__buy">Купить шину</button>
        </figcaption>
      </figure>
    </section>
  );
};

export default CardProductInfo;
