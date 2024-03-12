import "./style.scss";

import { useState } from "react";

const SearchProduct = () => {
  const [activeSearchOptions, setActiveSearchOptions] = useState(1);

  const dataSearcOptions = [
    "Поиск по Vin",
    "Поиск по марке",
    "Поиск по названию товара",
    "Поиск по артикулу",
  ];

  const changeActiveOptions = (id) => setActiveSearchOptions(id);

  const listSearchOptions = dataSearcOptions.map((item, id) => {
    if (activeSearchOptions === id) {
      return (
        <li key={id}>
          <button className="search__item--active">{item}</button>
        </li>
      );
    }
    return (
      <li key={id}>
        <button onClick={() => changeActiveOptions(id)}>{item}</button>
      </li>
    );
  });

  return (
    <section className="search">
      <ul className="search__list">{listSearchOptions}</ul>

      <div className="search__input">
        <input
          type="search"
          placeholder={dataSearcOptions[activeSearchOptions]}
        />
        <button className="search__input-button">искать</button>
      </div>
    </section>
  );
};

export default SearchProduct;
