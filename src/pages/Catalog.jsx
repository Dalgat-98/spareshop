import Header from "./../components/Header/Header";
import ProductCatalog from "./../components/ProductCatalog/ProductCatalog";
import Footer from "./../components/Footer/Footer";

const Catalog = () => {
  return (
    <>
      <Header />
      <main>
        <ProductCatalog />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
