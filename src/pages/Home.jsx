import Header from "./../components/Header/Header";
import Banner from "./../components/Banner/Banner";
import SearchProduct from "./../components/SearchProduct/SearchProduct";
import NavMain from "./../components/NavMain/NavMain";
import PopularProduct from "./../components/PopularProduct/PopularProduct";
import SaleBanner from "./../components/SaleBanner/SaleBanner";
import Footer from "./../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <SearchProduct />
        <NavMain />
        <PopularProduct title={"Популярные товары"} buttonActive={true} />
        <SaleBanner />
        <PopularProduct
          title={"С этим товаром покупают"}
          buttonActive={false}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
