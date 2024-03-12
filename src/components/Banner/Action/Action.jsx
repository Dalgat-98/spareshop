import "./style.scss";

import ProductTitleBanner from "../../HelpItems/ProductTitleBanner/ProductTitleBanner";

const Action = ({ text }) => {
  return (
    <aside className="action">
      {text && <ProductTitleBanner text={text} />}
      <div className="action__info">
        <div className="action__price">
          <p className="action__new-price">200</p>
          <p className="action__old-price">500</p>
        </div>
        <figure>
          <img src="/img/banner/bulb.jpg" alt="bulb" />
          <figcaption>Лампочка mini...</figcaption>
        </figure>
      </div>
      <div className="action__timer">
        <h4>До конца акции осталось:</h4>
        <div className="action__watch">
          <img src="img/icon/timer.svg" alt="Timer" />
          <div>
            <p className="action__watch-numb">00 : 20 : 00</p>
            <p className="action__wathc-text">часов минут секунд</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Action;
