import "./style.scss";

const ListPageCatalog = ({ pageProduct, setPageProduct, countPage }) => {
  const catalogPageList = [];

  for (let i = 1; i <= countPage; i++) {
    if (i === pageProduct) {
      catalogPageList.push(
        <li key={i}>
          <button
            className="products__pages-button--active"
            onClick={() => setPageProduct(i)}
          >
            {i}
          </button>
        </li>
      );
    } else {
      catalogPageList.push(
        <li key={i}>
          <button onClick={() => setPageProduct(i)}>{i}</button>
        </li>
      );
    }
  }
  return <ul className="products__pages-list">{catalogPageList}</ul>;
};

export default ListPageCatalog;
