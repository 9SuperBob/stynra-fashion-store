import React from "react";

function Sex() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-2 just gap-5 mt-25 mb-5 ">
        <div className="relative overflow-hidden">
          <img
            className="  w-full h-full  object-cover transition delay-0 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 "
            src="https://images.unsplash.com/photo-1678649878435-fec3df591a01?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Man"
          />
          <div className="absolute top-0 left-0 mt-50 w-full h-full pointer-events-none ">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-6xl  font-bold text-white">Man</h2>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <img
            className=" w-full h-full object-cover transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 "
            src="https://images.unsplash.com/photo-1503342331296-c8ca3b8dd0a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Girl"
          />
          <div className="absolute  left-0 top-0  mt-50 w-full h-full pointer-events-none  ">
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-6xl text-white font-bold   ">Women</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sex;
