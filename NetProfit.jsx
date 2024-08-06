import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const NetProfit = () => {
  return (
    <div className="netprofit">
      <div className="text-white h-[7.6rem] w-[21rem] bg-gray-900 rounded-lg p-4 absolute -right-80 bottom-56 mx-96 my-60 flex flex-col p-4">
        <span>Net Profit</span>

        <h1 className="text-4xl font-bold"> $ 6759.25 </h1>

        <span className="text-green-500 font-bold">
          <FontAwesomeIcon icon={faCaretUp} className="" /> 3%{" "}
        </span>

        <div className="flex justify-end items-center relative bottom-24">
          <h1 className=" relative left-14  font-bold text-xs">
            {" "}
            70% <br></br>Done
          </h1>
          <div className="w-20 h-20 border-8 border-t-blue-500  rounded-full rotate-90 animate-spin "></div>
          <div className="text-xs absolute top-20 mt-2 ">
            * The values here has been rounded off
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetProfit;
