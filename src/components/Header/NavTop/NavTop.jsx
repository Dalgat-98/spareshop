import "./style.scss";

import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <nav className="nav-top">
      <ul className="nav-top__list">
        <li className="nav-top__item">
          <Link className="nav-top__link">Магазины</Link>
        </li>
        <li className="nav-top__item">
          <Link className="nav-top__link">Акции</Link>
        </li>
        <li className="nav-top__item">
          <Link className="nav-top__link">Доставка и оплата</Link>
        </li>
        <li className="nav-top__item logo">
          <Link to={"/"} className="nav-top__link">
            <img src="/img/icon/logo.svg" alt="logo" />
          </Link>
        </li>
        <li className="nav-top__item">
          <Link className="nav-top__link">
            <img
              src="/img/icon/adress-header.svg"
              alt="adresIcon"
              className="nav-top__adres-icon"
            />
          </Link>
          <div>
            <p>Санкт-Петербург, ул</p>
            <p>Большая Конюшенная, д 19</p>
          </div>
        </li>
        <li className="nav-top__item">
          <div className="nav-top__panel-account">
            <button>
              <img src="/img/icon/like.svg" alt="likeIcon" />
            </button>
            <button>
              <img src="/img/icon/account.svg" alt="accountIcon" />
            </button>
            <button>
              <img src="/img/icon/basket-goods.svg" alt="basketGoods" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavTop;
