import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToDOListAdd({ TodoList, deleteI }) {
  const handleDelete = (id) => {
    toast.success("Deleted Successfully");
    deleteI(id);
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold pb-5 border-b-2 text-center">
        My To Do List
      </h1>
      {TodoList.map((ele) => (
        <div
          className="flex items-center justify-between pt-2 gap-1"
          key={ele.id}
        >
          <p className="text-center capitalize">{ele.text}</p>
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
