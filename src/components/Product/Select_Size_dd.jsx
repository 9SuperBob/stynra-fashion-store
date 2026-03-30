import React, { useState } from "react";

function Select_Size_dd() {

    const [selectedSize, setSelectedSize] = useState("SELECT SIZE");

    const sizeChange =(size)=>{
        setSelectedSize(size);
    }
  return (
    <div>
      <details className="dropdown">
        <summary className="btn btn-ghost text-black m-1 w-60 hover:bg-black hover:text-white">
          {selectedSize}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>sizeChange("SELECT SIZE")}>SELECT SIZE</a>
          </li>
          <li>
            <a onClick={()=>sizeChange("X")}>X</a>
          </li>
          <li>
            <a onClick={()=>sizeChange("XL")}>XL</a>
          </li>
          <li>
            <a onClick={()=>sizeChange("XXL")}>XXL</a>
          </li>
          <li>
            <a onClick={()=>sizeChange("XXXL")}>XXXL</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default Select_Size_dd;
