import Header from "../components/Header/Header";
import BasketList from "../components/BasketList/BasketList";
import PopularProduct from "./../components/PopularProduct/PopularProduct";
import Footer from "../components/Footer/Footer";

const Basket = () => {
  return (
    <>
      <Header />
      <main>
        <BasketList />
        <PopularProduct
          title={"С этим товаром покупают"}
          buttonActive={false}
        />
      </main>
      <Footer />
    </>
  );
};

export default Basket;
