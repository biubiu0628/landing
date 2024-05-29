import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Trang1 = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required";
    if (!user.email) newErrors.email = "Email is required";
    if (!user.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) navigate("/2");
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-[url('images/bg-sidebar-desktop.svg')] h-[568px] w-[274px] text-white p-8 flex lg:flex-col gap-6">
        <Step number={1} title="YOUR INFO" />
        <Step number={2} title="SELECT PLAN" />
        <Step number={3} title="ADD-ONS" />
        <Step number={4} title="SUMMARY" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col py-4 px-20 flex-1">
        <div className="py-6">
          <p className="text-[#15345F] text-[30px] font-Ubuntu-bold">
            Personal info
          </p>
          <p className="text-gray-400 font-Ubuntu-regular">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <InputField
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          label="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <div className="self-end place-content-end h-full">
          <button
            type="submit"
            className="bg-[#002C5D] text-white py-2 px-4 rounded hover:bg-[#174a8b]"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

const Step = ({ number, title }) => (
  <div className="flex items-center gap-4 ">
    <div
      className={`rounded-full w-10 h-10 border-solid border-[1px] flex justify-center items-center ${
        number === 1
          ? "bg-[#bee1fb] text-[#3d5d89]"
          : "bg-transparent border-white"
      }`}
    >
      {number}
    </div>
    <div className="hidden lg:block">
      <p className="text-gray-300">STEP {number}</p>
      <p className="font-Ubuntu-medium">{title}</p>
    </div>
  </div>
);

const InputField = ({ label, name, value, onChange, error }) => (
  <div className="py-4">
    <div className="flex justify-between">
      <p className="text-[#15345F] font-semibold">{label}</p>
      {error && <p className="text-red-500 font-semibold">{error}</p>}
    </div>
    <input
      type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`e.g. ${
        label === "Name"
          ? "Stephen King"
          : label === "Email Address"
          ? "stephenking@lorem.com"
          : "+1 234 567 890"
      }`}
      className={`border-solid border-[1px]  rounded-xl py-3 pl-2 w-full focus:outline-none focus:border-blue-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
  </div>
);

export default Trang1;
