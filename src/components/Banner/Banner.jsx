import "./style.scss";

import { useState } from "react";

import Action from "./Action/Action";

const Banner = () => {
  const [numbSlider, setNumbSlider] = useState(1);

  const nextNumbSlider = (numbSlider) => {
    if (numbSlider >= 6) {
      return setNumbSlider(1);
    }
    return setNumbSlider(++numbSlider);
  };

  const backNumbSlider = (numbSlider) => {
    if (numbSlider <= 1) {
      return setNumbSlider(6);
    }
    return setNumbSlider(--numbSlider);
  };

  const btnPanel = (id) => {
    setNumbSlider(id);
  };

  const listButton = [1, 2, 3, 4, 5, 6].map((id) => {
    if (id === numbSlider) {
      return (
        <button
          key={id}
          onClick={() => btnPanel(id)}
          className="slider__btn-panel--active"
        ></button>
      );
    }
    return <button key={id} onClick={() => btnPanel(id)}></button>;
  });

  return (
    <section className="banner-top">
      <div className="slider">
        <img
          src={`./img/banner/banner-car-parts-desk-${numbSlider}.jpg`}
          alt="banner"
        />
        <div className="slider__button">
          <button onClick={() => backNumbSlider(numbSlider)}>
            <img src="img/icon/arrow.svg" alt="arrow" />
          </button>
          <button onClick={() => nextNumbSlider(numbSlider)}>
            <img src="img/icon/arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="slider__btn-panel">{listButton}</div>
      </div>
      <Action text={"акция"} />
    </section>
  );
};

export default Banner;
