import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useParams} from "react-router-dom";

export default function Products() {
  const [sorted, setSorted] = useState([]);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [sortOption, setSortOption] = useState("default"); // Default sorting option

  const param = useParams();
   console.log(param)
  if (!param.categories){
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProduct(response.data);
      };
      fetchData();
    }, []);

  }
  else {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${param.categories}`);
        console.log(response.data);
        setProduct(response.data);
      };
      fetchData();
    }, [param.categories]);
  }


  const filteredData = product.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase().trim());
  });

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    const sortedData = [...product];
    if (selectedOption === "az") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedOption === "za") {
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (selectedOption === "lowToHigh") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "highToLow") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setProduct(sortedData);
  };

  return (
    <>
      <span className="searching-text">
        Search:{" "}
        <input
          className="input-search"
          placeholder="Search Products..."
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <div className="sort">
      <select
        className="Sorting-select"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="default">Sort By</option>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="lowToHigh">Low to High Price</option>
        <option value="highToLow">High to Low Price</option>
      </select>
      </div>
      
      <h2 className="Feature-p">Featured Products</h2>

      <div className="P-main-div">
        {filteredData.map((e, index) => (
          <div className="P-child-div" key={index}>
            <div className="P-child1-div">
              <Link to={`/product-details/${e.id}`}>
                <img className="p-img" src={e.image} alt="fake-img" />
              </Link>
            </div>

            <div className="P-child2-div">
              <h1>{e.title.slice(0,20)}</h1>
              <h2>Price: ${e.price}</h2>
              <h3>Category: {e.category} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
