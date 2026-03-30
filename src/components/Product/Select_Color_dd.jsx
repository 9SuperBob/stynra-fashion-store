import React from "react";

function Select_Color_dd() {
  return (
    <div>
      <details className="dropdown">
        <summary className="btn  m-1 text-black w-60 hover:bg-black hover:text-white">SELECT COLOR</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a className="text-blue-600">BLUE</a>
          </li>
          <li>
            <a className="text-black">BLACK</a>
          </li>
          <li>
            <a className="text-red-600">RED</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default Select_Color_dd;
