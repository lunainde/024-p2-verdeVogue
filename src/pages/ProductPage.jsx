import React from "react";
import MainTitle from '../components/MainTitle';

const ProductPage = ({ product }) => {
  return (
    <div>
      <Header />
      <MainTitle><span>verde</span>PRODUCT</MainTitle>
      {/* <h1>one product page</h1>
        <div>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
        <Footer /> */}
    </div>
  );
};

export default ProductPage;
