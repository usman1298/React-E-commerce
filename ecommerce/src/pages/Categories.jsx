import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = async (category) => {
    try {
      const productsResponse = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(productsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="category my-5">CATEGORIES</h1>
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/products/${category}`}
          onClick={() => handleCategoryClick(category)}
          style={{ textDecoration: "none" }} // Apply custom style to remove underline
        >
          <div className="cate-style">
            <h3>{category}</h3>
          </div>
        </Link>
      ))}
      <Outlet />
    </>
  );
}

export default Categories;
