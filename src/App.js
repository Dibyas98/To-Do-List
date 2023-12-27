import logo from "./logo.svg";
import "./App.css";
import Insert from "./component/Insert";
import { useState } from "react";
import ToDOListAdd from "./component/ToDOListAdd";

function App() {
  const [TodoList, setTodoList] = useState([]);

  const AddTodoList = (arg) => {
    // console.log(arg);
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: new Date(), text: arg },
    ]);
    // console.log(TodoList);
  };
  const HandelDelete = (id) =>{
    // console.log(arg);
    setTodoList((prevTodoList) => prevTodoList.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col p-24 items-center h-screen">
      <Insert submit={AddTodoList}></Insert>
     <ToDOListAdd TodoList ={TodoList} deleteI= {HandelDelete}></ToDOListAdd>
    </div>
  );
}

export default App;
