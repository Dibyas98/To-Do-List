import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToDOListAdd({ TodoList, deleteI, checke}) {
  const handleDelete = (id) => {
    toast.success("Deleted Successfully");
    deleteI(id);
  };
  const HandelCheckbox = (id)=>{
    checke(id)
  }

  return (
    <div>
      
      {TodoList.map((ele) => (
        <div
          className="flex items-center justify-between pt-2 gap-1  w-full"
          key={ele.id}
        >
          <input type="checkbox" onChange={() => HandelCheckbox(ele.id)} checked={ele.checked}/>
          <p className={`text-left  w-2/3 capitalize ${ele.checked ? 'line-through':''}`}>{ele.text}</p>
          <button
            className="bg-black text-slate-200 w-16 text-center rounded-sm cursor-pointer"
            onClick={() => handleDelete(ele.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}
