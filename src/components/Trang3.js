import React, { useState } from "react";
import { Link } from "react-router-dom";

const Trang3 = () => {
  const plan = JSON.parse(localStorage.getItem("planYear"));

  const [selectAdds, setSelectAdds] = useState([]);

  const HandleAdd = (name, price, isChecked) => {
    const newSelectAdds = [...selectAdds];
    if (isChecked) {
      newSelectAdds.push({ name, price });
    } else {
      const index = newSelectAdds.findIndex((item) => item.name === name);
      if (index !== -1) {
        newSelectAdds.splice(index, 1);
      }
    }
    setSelectAdds(newSelectAdds);
    localStorage.setItem("selectAdds", JSON.stringify(newSelectAdds));
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
            className="rounded-full text-[#3d5d89] w-10 h-10 border-solid
            border-[1px] flex justify-center items-center bg-[#bee1fb]"
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
      <div className="flex flex-col py-4 px-20 flex-1 gap-4">
        <div className="py-6">
          <p className="text-[#15345F] text-[30px] font-Ubuntu-bold ">
            Pick add-ons
          </p>
          <p className="text-gray-400">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        {plan ? (
          <div className="flex flex-col gap-4">
            <div className="py-4 flex items-center border-solid border-[1px] border-gray-300 rounded-xl hover:border-[#7b78ae]">
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={(e) =>
                    HandleAdd("Online service", "$10/yr", e.target.checked)
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[#15345F] font-bold">Online service</p>
                <p className="text-gray-400">Access to multiplayer games</p>
              </div>
              <p className="pr-4 text-[#8280ca] ">+$10/yr</p>
            </div>
            <div className="py-4 flex items-center border-solid border-[1px] border-gray-300 rounded-xl hover:border-[#7b78ae]">
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={(e) =>
                    HandleAdd("Larger storage", "$20/yr", e.target.checked)
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[#15345F] font-bold">Larger storage</p>
                <p className="text-gray-400">Extra 1TB of cloud save</p>
              </div>
              <p className="pr-4 text-[#8280ca] ">+$20/yr</p>
            </div>
            <div className="py-4 flex items-center border-solid border-[1px] border-gray-300 rounded-xl hover:border-[#7b78ae]">
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={(e) =>
                    HandleAdd(
                      "Customizable profile",
                      "$20/yr",
                      e.target.checked
                    )
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[#15345F] font-bold">Customizable profile</p>
                <p className="text-gray-400">Custom theme on your profile</p>
              </div>
              <p className="pr-4 text-[#8280ca] ">+$20/yr</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="py-4 flex items-center border-solid border-[1px] border-gray-300 rounded-xl hover:border-[#7b78ae]">
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={(e) =>
                    HandleAdd("Online service", "$1/mo", e.target.checked)
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[#15345F] font-bold">Online service</p>
                <p className="text-gray-400">Access to multiplayer games</p>
              </div>
              <p className="pr-4 text-[#8280ca] ">+$1/mo</p>
            </div>
            <div className="py-4 flex items-center border-solid border-[1px] border-gray-300 rounded-xl hover:border-[#7b78ae]">
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={(e) =>
                    HandleAdd("Larger storage", "$2/mo", e.target.checked)
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[#15345F] font-bold">Larger storage</p>
                <p className="text-gray-400">Extra 1TB of cloud save</p>
              </div>
              <p className="pr-4 text-[#8280ca] ">+$2/mo</p>
            </div>
            <div className="py-4 flex items-center border-solid border-[1px] border-gray-300 rounded-xl hover:border-[#7b78ae]">
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onChange={(e) =>
                    HandleAdd("Customizable profile", "$2/mo", e.target.checked)
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-[#15345F] font-bold">Customizable profile</p>
                <p className="text-gray-400">Custom theme on your profile</p>
              </div>
              <p className="pr-4 text-[#8280ca] ">+$2/mo</p>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center mt-auto">
          <Link
            to="/2"
            className="font-semibold hover:text-[#323a4d] text-[#a0a1a6]"
          >
            Go Back
          </Link>
          <Link
            to="/4"
            className="bg-[#002C5D] text-white py-2 px-4 rounded hover:bg-[#174a8b]"
          >
            Next Step
          </Link>
        </div>
      </div>
    </>
  );
};

export default Trang3;
