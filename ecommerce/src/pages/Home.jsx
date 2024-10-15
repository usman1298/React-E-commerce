import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-page-main-div">
        <img
          className="Home-page-img"
          src="https://antdisplay.com/pub/media/wysiwyg/CLOTHING_SHOP_2__1.png"
          alt="img"
        />

        <div className="image-overlay">
          <h1 className="page-heading">Welcome to Our Shop</h1>
          <Link to="/products">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
