import React from "react";
import Logo from "../Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faChartSimple,
  faClipboardList,
  faWallet,
  faBagShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    

      <div className="border-2 border-none mt-8 ml-24 rounded-xl h-[44rem] ">

        <div className="bg-gray-900 h-[68rem] w-[5rem] rounded-xl p-2 sm:mr-14">

          {/* Logo */}
          <div>

            <img
              className="w-[50px] rounded-xl hover:scale-110 duration-500 hover:cursor-pointer mt-1 ml-2 "
              src={Logo}
              alt=""
            />
          </div>

          {/* Icons */}

          <div className="text-white text-4xl flex flex-col gap-20 items-start ml-2 mt-10 align-end p-1 justify-center ">
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faChartSimple} />
            <FontAwesomeIcon icon={faClipboardList} />
            <FontAwesomeIcon icon={faWallet} />
            <FontAwesomeIcon icon={faBagShopping} />

            {/* signout Icon */}

            <div className="text-white text-3xl  mt-64 ">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>

          </div>

        </div>

      </div>

  
  );
};

export default Sidebar;
