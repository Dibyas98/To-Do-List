// import logo from "./logo.svg";
import "./App.css";
import Insert from "./component/Insert";
import { useState } from "react";
import ToDOListAdd from "./component/ToDOListAdd";

// ... (Previous code remains unchanged)

function App() {
  const [TodoList, setTodoList] = useState(() => {
    // Initialize TodoList from local storage or use an empty array
    const storedTodoList = JSON.parse(localStorage.getItem("TodoList")) || [];
    return storedTodoList;
  });

  const AddTodoList = (arg) => {
    const newTodo = { id: new Date(), text: arg,checked:false };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    updateLocalStorage([...TodoList, newTodo]);
  };

  const HandelDelete = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== id)
    );
    updateLocalStorage(TodoList.filter((item) => item.id !== id));
  };

  // Function to update local storage
  const updateLocalStorage = (updatedTodoList) => {
    localStorage.setItem("TodoList", JSON.stringify(updatedTodoList));
  };
  const Checked = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    updateLocalStorage( TodoList.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  ))
  };
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((prevTheme) => !prevTheme);

  const themeClass = darkTheme ? "dark" : "light";

  return (
    <div className={`flex flex-col p-24 items-center h-screen w-full ${themeClass}`}>
      <div className={`bg-white p-5 rounded shadow-lg ${themeClass}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Insert submit={AddTodoList}></Insert>
        <ToDOListAdd TodoList={TodoList} deleteI={HandelDelete} checke={Checked}></ToDOListAdd>
      </div>
    </div>
  );
}

export default App;
