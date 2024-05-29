import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";

const Trang2 = () => {
  const [planYear, setPlanYear] = useState(() => {
    const plan = localStorage.getItem("planYear");
    return plan ? JSON.parse(plan) : false;
  });

  // eslint-disable-next-line
  const [planing, setPlaning] = useState({
    name: "",
    price: "",
  });

  const handlePlaning = (name, price) => {
    setPlaning({ name, price });
    localStorage.setItem("selectPlan", JSON.stringify({ name, price }));
  };

  useEffect(() => {
    localStorage.setItem("planYear", JSON.stringify(planYear));
  }, [planYear]);

  const handleToggle = () => {
    setPlanYear(!planYear);
  };

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
            className="rounded-full text-[#3d5d89] w-10 h-10 border-solid 
            border-[1px] flex justify-center items-center bg-[#bee1fb]"
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
            className="rounded-full bg-transparent w-10 h-10 border-solid 
            border-[1px] border-white flex justify-center items-center"
          >
            4
          </div>
          <div>
            <p className="text-gray-300">STEP 4</p>
            <p className="font-Ubuntu-medium">SUNMARY</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 px-20 flex-1">
        <div className="py-6">
          <p className="text-[#15345F] text-[30px] font-Ubuntu-bold">
            Select your plan
          </p>
          <p className="text-gray-400">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        {!planYear ? (
          <div className="grid grid-cols-3 gap-4 h-[200px]">
            <button
              className="border-solid border-[1px] border-gray-300 rounded-xl p-4 flex 
          flex-col hover:border-[#7d78ae] focus:bg-[#f8f9fe] focus:border-[#7e79b1]"
              onClick={() => handlePlaning("Arcade", "$9/mo")}
            >
              <img src={Arcade} alt="" />
              <div className="flex flex-col flex-1 justify-end items-start">
                <p className="text-[#15345F] font-bold">Arcade</p>
                <p className="text-gray-400">$9/mo</p>
              </div>
            </button>
            <button
              className="border-solid border-[1px] border-gray-300 rounded-xl p-4 flex 
          flex-col hover:border-[#7d78ae] focus:bg-[#f8f9fe] focus:border-[#7e79b1]"
              onClick={() => handlePlaning("Advanced", "$12/mo")}
            >
              <img src={Advanced} alt="" />
              <div className="flex flex-col flex-1 justify-end items-start">
                <p className="text-[#15345F] font-bold">Advanced</p>
                <p className="text-gray-400">$12/mo</p>
              </div>
            </button>
            <button
              className="border-solid border-[1px] border-gray-300 rounded-xl p-4 flex 
          flex-col hover:border-[#7d78ae] focus:bg-[#f8f9fe] focus:border-[#7e79b1]"
              onClick={() => handlePlaning("Pro", "$15/mo")}
            >
              <img src={Pro} alt="" />
              <div className="flex flex-col flex-1 justify-end items-start">
                <p className="text-[#15345F] font-bold">Pro</p>
                <p className="text-gray-400">$15/mo</p>
              </div>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4 h-[200px]">
            <button
              className="border-solid border-[1px] border-gray-300 rounded-xl p-4 flex 
          flex-col hover:border-[#7d78ae] focus:bg-[#f8f9fe] focus:border-[#7e79b1]"
              onClick={() => handlePlaning("Arcade", "$90/yr")}
            >
              <img src={Arcade} alt="" />
              <div className="flex flex-col flex-1 justify-end items-start">
                <p className="text-[#15345F] font-bold">Arcade</p>
                <p className="text-gray-400">$90/yr</p>
                <p className="text-[#15345F]">2 months free</p>
              </div>
            </button>
            <button
              className="border-solid border-[1px] border-gray-300 rounded-xl p-4 flex 
          flex-col hover:border-[#7d78ae] focus:bg-[#f8f9fe] focus:border-[#7e79b1]"
              onClick={() => handlePlaning("Advanced", "$120/yr")}
            >
              <img src={Advanced} alt="" />
              <div className="flex flex-col flex-1 justify-end items-start">
                <p className="text-[#15345F] font-bold">Advanced</p>
                <p className="text-gray-400">$120/yr</p>
                <p className="text-[#15345F]">2 months free</p>
              </div>
            </button>
            <button
              className="border-solid border-[1px] border-gray-300 rounded-xl p-4 flex 
          flex-col hover:border-[#7d78ae] focus:bg-[#f8f9fe] focus:border-[#7e79b1]"
              onClick={() => handlePlaning("Pro", "$150/yr")}
            >
              <img src={Pro} alt="" />
              <div className="flex flex-col flex-1 justify-end items-start">
                <p className="text-[#15345F] font-bold">Pro</p>
                <p className="text-gray-400">$150/yr</p>
                <p className="text-[#15345F]">2 months free</p>
              </div>
            </button>
          </div>
        )}
        <div className="flex justify-center items-center bg-[#f8f9fe] w-full h-[50px] my-8 rounded-lg gap-4">
          <p
            className={`${
              planYear ? "text-gray-400" : "text-[#002C5D]"
            } font-semibold`}
          >
            Monthly
          </p>
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              onChange={handleToggle}
              checked={planYear}
            />
            <div
              className={`peer h-5 w-9 rounded-full bg-[#002C5D] after:absolute after:top-[4px] after:left-[4px] 
              after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all peer-focus:outline-none
              ${planYear ? "peer-checked:after:translate-x-4" : ""}`}
            ></div>
          </label>
          <p
            className={`${
              !planYear ? "text-gray-400" : "text-[#002C5D]"
            } font-semibold`}
          >
            Yearly
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <Link
            to="/"
            className="font-semibold hover:text-[#323a4d] text-[#a0a1a6]"
          >
            Go Back
          </Link>
          <Link
            to="/3"
            className="bg-[#002C5D] text-white py-2 px-4 rounded hover:bg-[#174a8b]"
          >
            Next Step
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trang2;
