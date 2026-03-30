import React from "react";
import Data_product2 from "./Data_product2";

function Trending_P() {
  return (
    <div>
      <div>
        <div className="mt-[140px] px-20">
          <p className="text-xl ">NEW COLLECTION</p>
          <div className="flex items-center justify-between">
            <p className="text-6xl font-bold">NEW ARRIVALS</p>
            <button className="btn btn-ghost border-2">SEE ALL PRODUCT</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 justify-center">
          {Data_product2.map((item)=>(
            <div className="px-20 mt-25" key={item.id}>
              <img src={item.image} alt="" />
              <p className="font-bold px-4 mt-2 text-3xl text-black">{item.name}</p>
              <p className="font-bold px-4 mt-2 text-2xl text-red-600">${item.price} USD</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending_P;
