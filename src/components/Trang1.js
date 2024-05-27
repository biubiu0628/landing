import React from "react";

const Trang1 = () => {
  return (
    <div className="flex flex-col py-4 px-20 flex-1">
      <div className="py-6">
        <p className="text-[#15345F] text-[30px] font-bold">Personal info</p>
        <p className="text-gray-400">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="py-4">
        <p className="text-[#15345F] font-semibold">Name</p>
        <input
          type="text"
          placeholder="e.g.Stephen King"
          className="border-solid border-[1px] border-gray-300 rounded-xl py-2 pl-2 w-full focus:outline-none focus:border-blue-500"
        ></input>
      </div>
      <div className="py-4">
        <p className="text-[#15345F] font-semibold">Email Address</p>
        <input
          type="email"
          placeholder="e.g.stephenking@lorem.com"
          className="border-solid border-[1px] border-gray-300 rounded-xl py-2 pl-2 w-full focus:outline-none focus:border-blue-500"
          required
        ></input>
      </div>
      <div className="py-4">
        <p className="text-[#15345F] font-semibold">Phone Number</p>
        <input
          type="tel"
          placeholder="e.g.+1 234 567 890"
          className="border-solid border-[1px] border-gray-300 rounded-xl py-2 pl-2 w-full focus:outline-none focus:border-blue-500"
        ></input>
      </div>
      <div className="self-end place-content-end h-full">
        <button className="bg-[#002C5D] text-white py-2 px-4 rounded">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Trang1;
