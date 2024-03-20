import "./style.scss";

import { useEffect, useState } from "react";

import BasketCard from "./BasketCard/BasketCard";
import BasketTotal from "./BasketTotal/BasketTotal.jsx";
import data from "./../Data/dataBasket.js";

const BasketList = () => {
  const [productsBasket, setProductsBasket] = useState(data);
  const [totalBasket, setTotalBasket] = useState({
    price: productsBasket.reduce((prev, curr) => prev + curr.price, 0),
    count: productsBasket.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotalBasket({
      price: productsBasket.reduce(
        (prev, curr) => prev + curr.price * curr.count,
        0
      ),
      count: productsBasket.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [productsBasket]);

  const deleteProduct = (id) => {
    setProductsBasket(productsBasket.filter((product) => product.id !== id));
  };

  const increaseCount = (id) => {
    setProductsBasket(
      productsBasket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.count * product.price,
          };
        }
        return product;
      })
    );
  };

  const decreaseCount = (id) => {
    setProductsBasket(
      productsBasket.map((product) => {
        if (product.id === id) {
          if (product.count > 1) {
            return {
              ...product,
              count: --product.count,
              priceTotal: product.count * product.price,
            };
          }
        }
        return product;
      })
    );
  };

  const changeCount = (id, value) => {
    setProductsBasket(
      productsBasket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      })
    );
  };

  const listProducts = productsBasket.map((product) => {
    return (
      <li className="basket__item">
        <BasketCard
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
          changeCount={changeCount}
        />
      </li>
    );
  });

  return (
    <section className="basket">
      <h1 className="basked__heading">Корзина</h1>
      <ul className="basket__list">
        {listProducts.length > 0 ? listProducts : <h2>Корзина пуста</h2>}
        {totalBasket.price > 0 && <BasketTotal totalBasket={totalBasket} />}
      </ul>
    </section>
  );
};

export default BasketList;
