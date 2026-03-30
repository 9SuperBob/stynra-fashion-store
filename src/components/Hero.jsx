import React from "react";

function Hero() {
  return (
    <div>
      <div className="h-screen w-full relative ">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="absolute top-3/4 left-0 right-0   px-20">
        <div className="flex justify-between items-end ">
          <div className="">
            <p className="text-xl font-bold text-white pb-2">Since 2002 |</p>
            <p className="text-6xl font-bold text-white">
              Luxury Brand never fades
            </p>
          </div>
          <div className=" text-left w-1/4 ">
            <p className="text-white text-2xl mb-5 ">
              Explore our curated collection of premium fashion collection,
              crafted to perfection.
            </p>
            <button className="bg-white text-black px-5 py-2 font-bold rounded-lg flex w-full justify-center hover:bg-gray-400 hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Hero;
