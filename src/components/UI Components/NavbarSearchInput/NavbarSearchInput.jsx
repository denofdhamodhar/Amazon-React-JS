import React, { useState } from "react";
import "./navbarSearchInput.css";

function NavbarSearchInput() {
  const [boxDisplay, setBoxDisplay] = useState(false);
  return (
    <div className="text-input-box d-flex justify-content-center align-items-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Favourite Item"
          aria-label="Search Your Favourite Item"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          <i class="bi bi-search"></i>
        </span>
      </div>
      {boxDisplay && (
        <div className="suggestions-box shadow">
          <li>sddsdsd</li>
          <li>sddsdsd</li>
          <li>sddsdsd</li>
        </div>
      )}
    </div>
  );
}

export default NavbarSearchInput;
