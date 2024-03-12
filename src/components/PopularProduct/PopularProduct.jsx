import "./style.scss";

import { useState } from "react";

import ProductCard from "./../ProductCard/ProductCard";
import sections from "./../Data/dataSections";
import cards from "./../Data/dataProduct";

const PopularProduct = ({ title, buttonActive }) => {
  const sectionsData = sections;
  const productsData = cards;
  const [activeSection, setActiveSection] = useState(0);
  const [positionProducts, setPositionProducts] = useState(0);

  const changeActiveSection = (id) => {
    setActiveSection(id);
    setPositionProducts(0);
  };

  const sectionList = sectionsData.map((item, id) => {
    if (id === activeSection) {
      return (
        <li className="popular-cards__item--active" key={id}>
          <button>{item}</button>
        </li>
      );
    }
    return (
      <li key={id}>
        <button onClick={() => changeActiveSection(id)}>{item}</button>
      </li>
    );
  });

  const popularProducts = productsData
    .map((product) => {
      if (product.section === sectionsData[activeSection]) {
        return <ProductCard key={product.id} product={product} />;
      }
    })
    .filter((item) => item !== undefined);

  const changePositionProducts = (arrow) => {
    if (
      popularProducts.length <= 4 ||
      (arrow === "left" && positionProducts === 0) ||
      popularProducts.length - 4 === positionProducts / -300
    ) {
      return setPositionProducts(0);
    }

    if (arrow === "left") {
      setPositionProducts(positionProducts + 300);
    }
    if (arrow === "right") {
      setPositionProducts(positionProducts - 300);
    }
  };

  return (
    <section className="popular-cards">
      <h3 className="popular-cards__headline">{title}</h3>
      <ul className="popular-cards__list">{sectionList}</ul>
      <div className="popular-cards__products">
        <button
          className="popular-cards__button popular-cards__button-left"
          onClick={() => {
            changePositionProducts("left");
          }}
        >
          <img src="./img/icon/arrow.svg" alt="Arrow" />
        </button>
        <div className="popular-cards__visiable">
          <div
            className="popular-cards__visiable-contaner"
            style={{ left: positionProducts + "px" }}
          >
            {popularProducts}
          </div>
        </div>
        <button
          className="popular-cards__button popular-cards__button-right"
          onClick={() => changePositionProducts("right")}
        >
          <img src="./img/icon/arrow.svg" alt="Arrow" />
        </button>
      </div>
      {buttonActive && (
        <button className="popular-cards__button-more">Cмотреть еще</button>
      )}

      {/* <button className="popular-cards__button-more">Cмотреть еще</button> */}
    </section>
  );
};

export default PopularProduct;
