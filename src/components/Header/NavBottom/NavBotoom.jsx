import "./style.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavBottom = () => {
  const dataMenu = [
    "Каталог запчастей",
    "Каталог ТО",
    "Шины",
    "Диски",
    "Аккумуляторы",
    "Автомасла",
    "Автолампы",
    "Аксессуары",
  ];

  const [activeItemMenu, setActiveItemMenu] = useState(1);

  const changeActiveOptions = (id) => setActiveItemMenu(id);

  const listMenu = dataMenu.map((item, id) => {
    if (activeItemMenu === id) {
      return (
        <li key={id} className="nav-bottom__item">
          <Link
            to={"/catalog"}
            className="nav-bottom__link nav-bottom__link--active"
          >
            {item}
          </Link>
        </li>
      );
    }
    return (
      <li key={id} className="nav-bottom__item">
        <Link
          // to={"/catalog"}
          onClick={() => changeActiveOptions(id)}
          className="nav-bottom__link"
        >
          {item}
        </Link>
      </li>
    );
  });

  return (
    <nav className="nav-bottom">
      <ul className="nav-bottom__list">{listMenu}</ul>
    </nav>
  );
};

export default NavBottom;
