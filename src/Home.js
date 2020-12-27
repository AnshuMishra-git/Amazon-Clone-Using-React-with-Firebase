import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon_Prime"
      ></img>
      {/* Product id,title,price,rating,image */}
      <div className="home_row">
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB) - Gold"
          price={150000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SX466_.jpg"
        />
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB) - Gold"
          price={150000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SX466_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB) - Gold"
          price={150000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SX466_.jpg"
        />
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB) - Gold"
          price={150000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SX466_.jpg"
        />
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB) - Gold"
          price={150000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SX466_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB) - Gold"
          price={150000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/611JavcU70L._SX466_.jpg"
        />
      </div>

      {/* Product  */}
    </div>
  );
}

export default Home;
