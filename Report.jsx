import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faCaretUp,
  faCalendarCheck,
  faCalendarXmark,
  faFileInvoiceDollar,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
const Report = () => {
  return (
    <div className="report  ">
      <div className="text-white text-3xl font-bold absolute top-32 left-60">
        {" "}
        <h1> Dashboard</h1>
      </div>

      <div className="absolute left-60 top-48  flex flex-row gap-4 ">
        <div className="text-white h-[8rem] w-[11rem] bg-gray-900 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-2xl bg-blue-900 rounded-lg p-2"
          />{" "}
          <h6>Total Orders</h6>75
          <div className="flex relative left-24 bottom-6 text-l">
            <span className="text-green-500 font-bold">
              <FontAwesomeIcon icon={faCaretUp} className="" /> 3%
            </span>
          </div>
        </div>

        <div className="text-white h-[8rem] w-[11rem] bg-gray-900 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="text-2xl bg-green-900 rounded-lg p-2"
          />{" "}
          <h6>Total Delivered</h6>70
          <div className="flex relative left-24 bottom-6 text-l">
            <span className="text-red-500 font-bold">
              <FontAwesomeIcon icon={faCaretDown} className="" /> 3%
            </span>
          </div>
        </div>

        <div className="text-white h-[8rem] w-[11rem] bg-gray-900 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faCalendarXmark}
            className="text-2xl bg-red-900 rounded-lg p-2"
          />{" "}
          <h6>Total Cancelled</h6>05
          <div className="flex relative left-24 bottom-6 text-l">
            <span className="text-green-500 font-bold">
              <FontAwesomeIcon icon={faCaretUp} /> 3%
            </span>
          </div>
        </div>
        <div className="text-white h-[8rem] w-[11rem] bg-gray-900 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faFileInvoiceDollar}
            className="text-2xl bg-pink-600/70 rounded-lg p-2"
          />
          <h6>Total Revenue</h6> $12k
          <div className="flex relative left-24 bottom-6 text-l">
            <span className="text-red-500 font-bold">
              <FontAwesomeIcon icon={faCaretDown} /> 3%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
