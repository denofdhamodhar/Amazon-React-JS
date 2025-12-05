import React, { useState } from "react";
import "./navbarSearchInput.css";
import { productSearch } from "../../../service/searchProducts";
import { checkValidUser } from "../../../utils/utils";
import { NAVBAR_SEARCH_CONST_CONFIG } from "../../../constants/navbarSearchInput";

function NavbarSearchInput() {
  const [boxDisplay, setBoxDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [titles, setTitles] = useState([]);
  // https://dummyjson.com/products/search?q=make

  function sendData() {
    console.log("Send Data");
    console.log(products);
    console.log("----------------------------------------");
  }

  async function keywordsSuggestionApicall(word) {
    let isUserValid = checkValidUser();
    if (isUserValid) {
      try {
        const response = await productSearch(word);
        // console.log(response.data.products);
        let products = response.data.products;
        setProducts([...products]);
        let productTitles = products.map((product) => {
          return product.title; // here it's create an array with full of titles
        });
        // console.log(productTitles)
        if (productTitles.length == 0) {
          // if no title was present in a array then setTitles = none
          setTitles(NAVBAR_SEARCH_CONST_CONFIG.NO_PRODUCT_MSG);
          return;
        }
        setTitles([...productTitles]);
      } catch (error) {
        console.log(error);
      }
    } else {
      setTitles(NAVBAR_SEARCH_CONST_CONFIG.USER_ABSENT_MSG);
    }
  }

  function keywordsSuggestion(e) {
    // console.log(e.target.value)
    let keywordCapture = e.target.value;
    // console.log(keywordCapture.length)
    if (keywordCapture.length > 0) {
      // alert("call fn")
      setBoxDisplay(true);
      keywordsSuggestionApicall(keywordCapture);
    } else {
      setBoxDisplay(false);
    }
  }

  return (
    <div className="text-input-box d-flex justify-content-center align-items-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Favourite Item"
          onChange={(e) => keywordsSuggestion(e)}
        />
        {boxDisplay ? (
          <span
            onClick={() => setBoxDisplay(false)}
            className="input-group-text"
            id="basic-addon2"
          >
            <i className="bi bi-caret-down-fill"></i>
          </span>
        ) : (
          <span
            onClick={() => setBoxDisplay(true)}
            className="input-group-text"
            id="basic-addon2"
          >
            <i className="bi bi-search"></i>
          </span>
        )}
      </div>
      {boxDisplay && (
        <div className="suggestions-box shadow">
          {titles.map((productTitle, i) => (
            <li onClick={() => sendData()} key={i}>
              <i
                style={{ fontSize: "14px", marginRight: "8px" }}
                className="bi bi-search "
              ></i>
              {productTitle}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavbarSearchInput;
