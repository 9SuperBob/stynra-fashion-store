import React from "react";
// import data
import Data_New_Arrivals from "./Data_product";
import Select_Color_dd from "./Select_Color_dd";
import Select_Size_dd from "./Select_Size_dd";
function Product() {
  return (
    <div>
      <div className="mt-[140px] px-20">
        <p className="text-xl ">NEW COLLECTION</p>
        <p className="text-6xl font-bold">NEW ARRIVALS</p>
      </div>

      <div className="px-20  ">
        <div className="grid grid-cols-3 gap-10 justify-center ">
          {Data_New_Arrivals.map((item) => (
            <div key={item.id} className=" flex justify-center flex-col group ">
              <div className="relative">
                <img src={item.image} alt={item.name} className="" />
                <div className="absolute inset-0 mt-140 px-7 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <div className="flex justify-around gap-5 ">
                    <button className="btn w-60  ">
                      <Select_Color_dd />
                    </button>
                    <button className="btn w-60 ">
                      <Select_Size_dd />
                    </button>
                  </div>
                  <button className="btn btn-soft w-full mt-5 hover:bg-black hover:text-white">ADD TO CART</button>
                </div>
              </div>

              <p className="text-3xl px-4 font-bold mt-2">{item.name}</p>
              <p className=" text-red-600 text-2xl  px-4 mt-2">
                $ {item.price} USD
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
