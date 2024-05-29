import React from "react";
import { Link } from "react-router-dom";

const Trang4 = () => {
  const plan = JSON.parse(localStorage.getItem("planYear"));
  const selectPlan = JSON.parse(localStorage.getItem("selectPlan")) || {};
  const selectAdds = JSON.parse(localStorage.getItem("selectAdds")) || [];

  let totalPrice = parseFloat(selectPlan.price.replace("$", ""));
  for (const add of selectAdds) {
    totalPrice += parseFloat(add.price.replace("$", ""));
  }

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
      <div className="flex flex-col py-4 px-20 flex-1 gap-4">
        <div className="py-6">
          <p className="text-[#15345F] text-[30px] font-Ubuntu-bold">
            Finishing up
          </p>
          <p className="text-gray-400">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="w-full flex flex-col bg-[#f8f9fe] rounded-xl px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-[#15345F] font-bold">{selectPlan.name}</p>
              <Link
                to="/2"
                className="text-gray-400 underline hover:text-[#6e68c8]"
              >
                Change
              </Link>
            </div>
            <p className="text-[#1c3252] font-bold">{selectPlan.price}</p>
          </div>
          <div className="flex flex-col gap-4 py-4 border-solid border-t-[1px] border-[#ebecf1]">
            {selectAdds.map((add, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-gray-400">{add.name}</p>
                <p className="text-[#4e5e76] font-semibold">{add.price}</p>
              </div>
            ))}
          </div>
        </div>
        {plan ? (
          <div className="flex justify-between px-4 items-center">
            <p className="text-gray-400">Total(per year)</p>
            <p className="text-[18px] text-[#4a41e3] font-bold">
              +${totalPrice}/yr
            </p>
          </div>
        ) : (
          <div className="flex justify-between px-4 items-center">
            <p className="text-gray-400">Total(per month)</p>
            <p className="text-[18px] text-[#4a41e3] font-bold">
              +${totalPrice}/mo
            </p>
          </div>
        )}
        <div className="flex justify-between items-center mt-auto">
          <Link
            to="/3"
            className="font-semibold hover:text-[#323a4d] text-[#a0a1a6]"
          >
            Go Back
          </Link>
          <Link
            to="/thank"
            className="bg-[#483efe] text-white py-2 px-4 rounded hover:bg-[#938cfe]"
          >
            Confirm
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trang4;
