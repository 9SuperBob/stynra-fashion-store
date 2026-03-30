import React from "react";

function Hero2() {
  return (
    <div>
      <div className="h-screen w-full mt-20 relative ">
        <img
          className="h-full w-full object-cover  "
          src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-3/4 left-0 right-0 px-20 ">
          <div className="flex justify-between">
            <p className="text-white font-bold text-6xl  pb-2">
              The Icons of The Season
            </p>
          </div>
          <button className="btn  px-5 py-2 w-70 mt-3 ">OUR STORY</button>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid-cols-2 grid">
            <div>
              <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1546998590-6a6195049fa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydCUyMG1vZGVsfGVufDB8fDB8fHww" alt="" />
            </div>
            <div className="px-8 "> 
              <div className="flex justify-between items-center mt-20 border-b-2   ">
                <p>EXCLUSIVE</p>
                <button className="btn mb-5 border-b-base-300 ">SEE ALL EXCLUSIVE</button>
              </div>

              <p className="text-5xl mt-15">LEATHER HAND BAG</p>
              <p className="mt-4 text-xl text-gray-500">A timeless carryall designed for everyday elegance. Crafted from <br /> full-grain Italian leather with a minimalist silhouette.</p>
              <p className="mt-10 text-2xl text-red-500">$ 500.00 USD</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
