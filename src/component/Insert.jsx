import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Insert({ submit }) {
  const [inputData, setInputData] = useState("");

  const handleInputText = (e) => {
    setInputData(e.target.value);
  };

  const handleButton = () => {
    if (!inputData) {
      toast.warning("Input box is Empty");
    } else {
      toast.success("Inserted Successfully");
      // console.log(inputData);
      submit(inputData);
      setInputData('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={handleInputText}
        className="border-2 w-60 bg-lime-300 focus:outline-none font-medium p-1 pl-4 capitalize"
      />
      <button className="bg-[#06B6D4] text-[#fff] w-24 p-1 rounded-sm" onClick={handleButton}>
        Add Items
      </button>
      <ToastContainer />
    </div>
  );
}
