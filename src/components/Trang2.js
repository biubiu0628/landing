import React from "react";
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";

const Trang2 = () => {
  return (
    <div className="flex flex-col py-4 px-20 flex-1">
      <div className="py-6">
        <p className="text-[#15345F] text-[30px] font-bold">Select your plan</p>
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 h-[200px]">
        <div className="border-solid border-[1px] border-gray-300 rounded-xl p-4 grid grid-cols-1">
          <img src={Arcade} alt="" />
          <div className="flex flex-col justify-end items-start">
            <p className="text-[#15345F] font-bold">Arcade</p>
            <p className="text-gray-400">$9/mo</p>
          </div>
        </div>
        <div className="border-solid border-[1px] border-gray-300 rounded-xl p-4 grid grid-cols-1">
          <img src={Advanced} alt="" />
          <div className="flex flex-col justify-end items-start">
            <p className="text-[#15345F] font-bold">Advanced</p>
            <p className="text-gray-400">$12/mo</p>
          </div>
        </div>
        <div className="border-solid border-[1px] border-gray-300 rounded-xl p-4 grid grid-cols-1">
          <img src={Pro} alt="" />
          <div className="flex flex-col justify-end items-start">
            <p className="text-[#15345F] font-bold">Pro</p>
            <p className="text-gray-400">$15/mo</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex">
        <button>Go Back</button>
        <button className="bg-[#002C5D] text-white py-2 px-4 rounded">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Trang2;
