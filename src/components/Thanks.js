import React from "react";
import Thank from "../images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <>
      <div className="bg-[url('images/bg-sidebar-desktop.svg')] h-[568px] w-[274px] text-white p-8 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div
            className="rounded-full bg-transparent w-10 h-10 border-solid 
      border-[1px] border-white flex justify-center items-center"
          >
            1
          </div>
          <div>
            <p className="text-gray-300">STEP 1</p>
            <p className="font-Ubuntu-medium">YOUR INFO</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="rounded-full bg-transparent w-10 h-10 border-solid 
      border-[1px] border-white flex justify-center items-center"
          >
            2
          </div>
          <div>
            <p className="text-gray-300">STEP 2</p>
            <p className="font-Ubuntu-medium">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="rounded-full bg-transparent w-10 h-10 border-solid 
      border-[1px] border-white flex justify-center items-center"
          >
            3
          </div>
          <div>
            <p className="text-gray-300">STEP 3</p>
            <p className="font-Ubuntu-medium">ADD-ONS</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="rounded-full text-[#3d5d89] w-10 h-10 border-solid 
      border-[1px] flex justify-center items-center bg-[#bee1fb]"
          >
            4
          </div>
          <div>
            <p className="text-gray-300">STEP 4</p>
            <p className="font-Ubuntu-medium">SUNMARY</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center px-20">
        <img src={Thank} alt="" className="w-[80px] h-[80px] m-4" />
        <p className="text-[30px] font-Ubuntu-bold text-[#062051] py-4">
          Thank you!
        </p>
        <p className="text-gray-400 text-center text-lg">
          Thanks for confirming your subcription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </>
  );
};

export default Thanks;
