import "./style.scss";

import { Link } from "react-router-dom";

const NavMain = () => {
  const dataNavMain = {
    "auto-fluid": "Автохимия",
    "tires-wheels": "Шины и диски",
    tools: "Инструменты",
    "spares-maintenance": "Запчасти на ТО",
    autoelectronics: "Автоэлектроника",
    accessories: "Аксессуары и другое",
  };

  const listNavMain = [];

  for (let item in dataNavMain) {
    listNavMain.push(
      <li className="nav__item" key={item}>
        <Link className="nav__item-link">
          <div className="nav__item-container">
            <div className="nav__item-title">
              <p>{dataNavMain[item]}</p>
              <span>Перейти {">"}</span>
            </div>
            <div className="nav__item-image">
              <img src={`./img/icon/${item}.svg`} alt="autoFluid" />
            </div>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <nav className="nav">
      <ul className="nav__list">{listNavMain}</ul>
    </nav>
  );
};

export default NavMain;
