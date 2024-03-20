import "./style.scss";

const BasketTotal = ({ totalBasket }) => {
  const { price, count } = totalBasket;

  return (
    <section className="basket-total">
      <h3>В вашей козине {count} товаров</h3>
      <h3>На сумму {price} рублей</h3>
    </section>
  );
};

export default BasketTotal;
