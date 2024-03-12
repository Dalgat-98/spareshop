import "./style.scss";

const ProductTitleBanner = ({ text }) => {
  return (
    <div className="product-title-banner">
      <p className="product-title-text">{text}</p>
    </div>
  );
};

export default ProductTitleBanner;
