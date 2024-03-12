import Header from "../components/Header/Header";
import CardProductInfo from "../components/CardProductInfo/CardProductInfo";
import CardProductDescription from "../components/CardProductDescription/CardProductDescription";
import PopularProduct from "../components/PopularProduct/PopularProduct";
import Footer from "../components/Footer/Footer";

import qwe from "./../components/Data/dataProduct";

const CardProduct = (product) => {
  return (
    <>
      <Header />
      <main>
        <CardProductInfo product={qwe[1]} />
        <CardProductDescription />
        <PopularProduct
          title={"С этим товаром покупают"}
          buttonActive={false}
        />
      </main>
      <Footer />
    </>
  );
};

export default CardProduct;
