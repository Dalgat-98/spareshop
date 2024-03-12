import "./style.scss";

import { useState } from "react";

import dataProduct from "./../Data/dataProduct.js";

import FilterControlPanel from "./FilterControlPanel/FilterControlPanel";
import ProductCard from "../ProductCard/ProductCard";
import ListPageCatalog from "./ListPageCatalog/ListPageCatalog.jsx";

const ProductCatalog = () => {
  const [pageProduct, setPageProduct] = useState(1);
  const [countProductinPage, setCountProductinPage] = useState(12);
  const [sortListProduct, setSortListProduct] = useState(
    "products__list--sort-table"
  );

  const catalogPproductList = dataProduct;
  const countPage = Math.ceil(catalogPproductList.length / countProductinPage);

  const catalotProductCardList = catalogPproductList.map((product, index) => {
    if (
      index + 1 <= pageProduct * countProductinPage &&
      index + 1 > (pageProduct - 1) * countProductinPage
    ) {
      return <ProductCard key={product.id} product={product} />;
    }
  });

  //Меняем хук sortListProduct для сортировки катлога таблицей или списком
  const sortTable = () => {
    setSortListProduct("products__list--sort-table");
    setPageProduct(Math.ceil(catalogPproductList.length / 12));
    setCountProductinPage(12);
  };
  const sortList = () => {
    setSortListProduct("products__list--sort-list");
    setPageProduct(Math.floor(catalogPproductList.length / 4));
    setCountProductinPage(4);
  };

  return (
    <div className="catalog">
      <div className="breadcrumbs">Главная - Шины - Шины зимние</div>
      <div className="catalog__title">
        <h2>Нешипованные шины</h2>
      </div>
      <section className="catalog__options">
        <ul className="catalog__properties">
          <li>Полноприводные</li>
          <li>от 5000</li>
          <li>Nokian</li>
        </ul>

        <div className="catalog__sort-buttons">
          <select>
            <option>По популярности</option>
            <option>Сначала дешевые</option>
            <option>Сначала дорогие</option>
          </select>

          <button onClick={() => sortTable()}>
            <img src="./img/icon/sort-table.svg" alt="Сортировать таблицей" />
          </button>
          <button onClick={() => sortList()}>
            <img src="./img/icon/sort-list.svg" alt="Сортировать списком" />
          </button>
        </div>
      </section>

      <section className="catalog__product">
        <FilterControlPanel />
        <div className="products">
          <ul className={sortListProduct}>{catalotProductCardList}</ul>
          <ListPageCatalog
            pageProduct={pageProduct}
            setPageProduct={setPageProduct}
            countPage={countPage}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductCatalog;
