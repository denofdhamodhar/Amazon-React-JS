import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../UI Components/Navbar/Navbar";
import { checkValidUser } from "../../utils/utils";
import { productSearch } from "../../service/searchProducts";
import "./searchproductdisplay.css";

function SearchProductsDisplayPage() {
  let params = useParams();
  let keyword = params.searchKeyword;
  // console.log(keyword)
  let isUserValid = checkValidUser();

  const [searchProducts, setSearchProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const [priceSelected, setPriceSelected] = useState(null);

  useEffect(() => {
    if (isUserValid == true) {
      async function fetchData() {
        try {
          let response = await productSearch(keyword);
          console.log(response.data.products);
          let data = response.data.products;
          setSearchProducts([...data]);
          let category = data.map((item) => {
            return item.category;
          });
          const uniqueSet = new Set(category); // remove dupilicates
          // setcategories([...category]);
          setcategories([...uniqueSet]);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    } else {
      console.log("user not logged in");
    }
  }, [isUserValid, keyword]);

  function sendSelectProduct(item) {
    alert(item.id);
  }

  const filteredProducts = selected
    ? searchProducts.filter((product) => product.category === selected)
    : searchProducts;


  return (
    <div>
      <Navbar />
      <div className="main-div-spd">
        <div className="row">
          <div className="col-3 p-5 sidebar-search-product">
            <div>
              <p>Filters</p>
              <hr />
              <div>
                <p>Categories</p>
                {categories.map((category, i) => (
                  <div className="form-check mb-3" key={i}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={selected === category}
                      onChange={() => {
                        setSelected((prev) =>
                          prev == category ? null : category
                        );
                      }}
                    />
                    <label className="form-check-label">{category}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col p-5 content-box-spd">
            <div>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="card mb-4"
                  style={{ maxWidth: "600px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.images[0]}
                        className="img-fluid rounded-start pt-3"
                        alt={product.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <h5>₹{product.price}</h5>
                        <button
                          onClick={() => sendSelectProduct(product)}
                          className="btn btn-warning my-2"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProductsDisplayPage;
