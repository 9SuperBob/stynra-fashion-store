import React from "react";

function DropdownMenu() {
  return (
    <div>
      <details className="dropdown">
        <summary className="btn btn-ghost m-1">PAGES+</summary>
        <ul className="menu dropdown-content bg-base-100  z-1 w-52 p-2 shadow-sm">
          <li>
            <a>BLOGS</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=iS1D7ncHVkc&list=RDiS1D7ncHVkc&start_radio=1">
              BLOG DETAILS
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
}



export default DropdownMenu  ;