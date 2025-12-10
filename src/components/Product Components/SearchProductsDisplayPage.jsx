import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkValidUser } from "../../utils/utils";
import { productSearch } from "../../service/searchProducts";
import Navbar from "../../components/UI Components/Navbar/Navbar";
import "./searchproductdisplay.css";

function SearchProductsDisplayPage() {
  //data
  let [safeCopyOGData, setSafeCopyOGData] = useState([]);
  let [data, setData] = useState([]);

  // categoryArray
  let [categoryArray, setCategoryArray] = useState([]);

  // indicators
  let [priceFilterIndicator, setPriceFilterIndicator] = useState(false);
  let [categoryFilterIndicator, setcategoryFilterIndicator] = useState(false);

  //name selector
  let [priceFilterSelected, setpriceFilterSelected] = useState("");
  let [categorySelected, setCategorySelected] = useState("");

  //cart Array
  let [cartArray, setCartArray] = useState([]);

  let params = useParams();
  let keyword = params.searchKeyword;
  // console.log(keyword);
  let isValidUser = checkValidUser();

  // data fetch
  useEffect(() => {
    if (isValidUser == true) {
      async function fetchsearhkeywordproducts() {
        let response = await productSearch(keyword);
        // console.log(response.data.products)
        let OG_Data = response.data.products;
        setSafeCopyOGData(OG_Data);
        setData(OG_Data);
        let categories = OG_Data.map((product) => {
          return product.category;
        });
        let unq = new Set(categories);
        setCategoryArray([...unq]);
      }
      fetchsearhkeywordproducts();
    }
  }, [keyword, isValidUser]);

  // filters
  useEffect(() => {
    if (categoryFilterIndicator === true && priceFilterIndicator === true) {
      if (categorySelected !== undefined && categorySelected !== "") {
        let tempData = [...safeCopyOGData];
        let categoryFilteredProducts = tempData.filter((product) => {
          return product.category == categorySelected;
        });
        if (priceFilterSelected === "High") {
          let priceFilterDone = categoryFilteredProducts.sort((a, b) => {
            return b.price - a.price;
          });
          setData(priceFilterDone);
        }
        if (priceFilterSelected === "Low") {
          let priceFilterDone = categoryFilteredProducts.sort((a, b) => {
            return a.price - b.price;
          });
          setData(priceFilterDone);
        }
      }
    } else if (
      categoryFilterIndicator === false &&
      priceFilterIndicator === true
    ) {
      if (priceFilterSelected === "High") {
        let tempData = [...safeCopyOGData];
        let priceFilter = tempData.sort((a, b) => {
          return b.price - a.price;
        });
        setData(priceFilter);
      }
      if (priceFilterSelected === "Low") {
        let tempData = [...safeCopyOGData];
        let priceFilter = tempData.sort((a, b) => {
          return a.price - b.price;
        });
        setData(priceFilter);
      }
    } else if (
      categoryFilterIndicator === true &&
      priceFilterIndicator === false
    ) {
      if (categorySelected !== undefined && categorySelected !== "") {
        let tempData = [...safeCopyOGData];
        let categoryFilteredProducts = tempData.filter((product) => {
          return product.category == categorySelected;
        });
        setData(categoryFilteredProducts);
      } else {
        setData(safeCopyOGData);
      }
    } else {
      setData(safeCopyOGData);
    }
  }, [
    priceFilterSelected,
    categorySelected,
    safeCopyOGData,
    priceFilterIndicator,
    categoryFilterIndicator,
  ]);

  function highPriceFilterIndicator(e) {
    if (e.target.checked === true) {
      setPriceFilterIndicator(true);
      setpriceFilterSelected("High");
    } else {
      setPriceFilterIndicator(false);
      setpriceFilterSelected("");
    }
  }

  function LowPriceFilterIndicator(e) {
    if (e.target.checked === true) {
      setPriceFilterIndicator(true);
      setpriceFilterSelected("Low");
    } else {
      setPriceFilterIndicator(false);
      setpriceFilterSelected("");
    }
  }

  function categoryIndicatorFn(e, categoryName) {
    if (e.target.checked === true) {
      setcategoryFilterIndicator(true);
      setCategorySelected(categoryName);
    } else {
      setcategoryFilterIndicator(false);
      setCategorySelected("");
    }
  }

  function AddtoCartArray(product) {
    console.log("Product Added to Cart");
    setCartArray((prev) => [...prev, product]);
  }

  console.log(cartArray);

  return (
    <div>
      <Navbar />
      <div className="main-box">
        <div className="row">
          <div className="col-2 sidebar p-5 ">
            <div>
              <p>Filters</p>
              <hr />
            </div>
            <div>
              <p>Price</p>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={priceFilterSelected === "High"}
                  disabled={priceFilterSelected === "Low"}
                  onChange={(e) => highPriceFilterIndicator(e)}
                />
                <label className="form-check-label">High to Low</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={priceFilterSelected === "Low"}
                  disabled={priceFilterSelected === "High"}
                  onChange={(e) => LowPriceFilterIndicator(e)}
                />
                <label className="form-check-label">Low to High</label>
              </div>
              <hr />
            </div>
            <div>
              <p>Category</p>
              <div>
                {categoryArray.map((categoryName, i) => (
                  <div key={i} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={categorySelected === categoryName}
                      onChange={(e) => categoryIndicatorFn(e, categoryName)}
                    />
                    <label className="form-check-label">{categoryName}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col content-box content-box-card-box ">
            {data.map((product) => (
              <div
                key={product.id}
                className="card mb-3"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.images[0]}
                      className="img-fluid rounded-start pt-4"
                      alt={product.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <h5>₹{product.price}</h5>
                      <button
                        className="btn btn-warning"
                        onClick={() => AddtoCartArray(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 cartbox p-5">
            <p className="h5">Cart</p>
            <hr />
            <div className="row">
              <div className="col-2">
                {cartArray.map((product, i) => (
                  <div className="cart-item py-2" key={i}>
                    <div className="cart-col index">{i + 1}.</div>
                    <div className="cart-col title">{product.title}</div>
                    <div className="cart-col price">₹{product.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProductsDisplayPage;
