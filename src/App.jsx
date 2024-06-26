import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

function App() {
  // Following state is for single todo
  const [todo, settodo] = useState("");

  // Following state is for the Array of todo
  const [todos, settodos] = useState([]);


  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    console.log("Todos From local storage:", todos);
    if (todostring) {
      let todos = JSON.parse(todostring);
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    console.log("Updating localstorage with todos:", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const addTodo = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    console.log("Todos After Addition:", todos);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos);
  };

  const deleteTodo = (e, id) => {
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
  };

  const editTodo = (e, id) => {
    let edittodo = todos.filter((item) => item.id === id);
    settodo(edittodo[0].todo);
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  return (
    <>
      <Navbar />

      <div className="ml-auto mr-auto mt-[2rem] mb-[2rem] rounded-xl container bg-[#B284BE]  lg:w-[50vw] p-[1rem] shadow-new md:w-[80vw] sm:w-[100vw] new-ratio:w-[80vw]">
        <h2 className="text-2xl uppercase font-semibold text-center text-[#C46210] w-[170px] h-[40px] m-auto flex justify-center items-center bg-white rounded-xl shadow-innershadow">
          Add a ToDo
        </h2>

        {/* Inserting todos */}
        <div className="my-[10px] md:flex  md:space-y-0 md:flex-row md:justify-between md:items-center  sm:flex-col sm:space-y-3 new-ratio:space-y-4 new-ratio-2:space-y-4">
          {/* Takes the todo as input */}
          <input
            type="text"
            className="outline-none sm:w-[100%] md:w-[50vw] lg:w-[30vw] h-[5vh] rounded-[10px] p-5 text-xl shadow-innershadow new-ratio:w-[100%] new-ratio-2:w-[100%]"
            onChange={handleChange}
            value={todo}
            placeholder="Enter the task to do here! "
          />

          {/* Button to add a todo */}
          <button
            className="flex justify-center items-center  cursor-pointer md:w-[120px] h-[45px] bg-white 
            text-[#C46210] uppercase text-[20px] font-medium rounded-xl hover:text-[#03C03C] hover:shadow-innershadow md:m-0 sm:w-[600px] sm:m-auto new-ratio:w-[100%] disabled:text-black disabled:shadow-none new-ratio-2:p-3 new-ratio-2:w-[100%]"
            onClick={addTodo}
            disabled={todo.length <= 0}
          >
            Save
          </button>
        </div>

        <div className="my-3 flex gap-2 uppercase text-white font-bold">
          <input
            type="checkbox"
            onChange={toggleFinished}
            checked={showFinished}
            className="gap-2"
          />
          <p>Show Finished</p>
        </div>

        {/* Displaying and modifiying todos */}
        <h2 className="text-2xl uppercase font-semibold text-center text-[#C46210] w-[170px] h-[40px]  flex justify-center items-center bg-white rounded-xl shadow-innershadow">
          Your Task
        </h2>

        <div className="todos_container">
          <ul className="todos mt-3">
            {todos.length === 0 && (
              <div className="text-2xl text-white font-bold  w-max p-2 uppercase">
                No todos to display
              </div>
            )}
            {todos.map((item) => {
              // fales || true
              return (
                (showFinished || !item.isCompleted) && (
                  <li
                    className="min-w-[40vw] todo flex bg-white rounded-xl p-[0.5rem] my-1 shadow-innershadow"
                    key={item.id}
                  >
                    {/* Following div consist of checkbox  */}
                    <div className="flex justify-center items-center">
                      <input
                        name={item.id}
                        onChange={handleCheckbox}
                        type="checkbox"
                        checked={item.isCompleted}
                      />
                    </div>

                    {/* Following div consist of task-title and edit,delete button */}
                    <div className="flex justify-between sm:w-[95%] new-ratio:w-[85%] ml-2 new-ratio-2:w-[75%]">
                      {/* following div display the task  */}
                      <div
                        className={clsx(
                          "text-xl break-words overflow-wrap break-word whitespace-pre-wrap min-w-[85%] text-justify",
                          item.isCompleted === true && "text-xl line-through"
                        )}
                      >
                        {item.todo}
                      </div>

                      {/* Edit and Delete button of Todo goes here */}
                      <div className="flex gap-5 justify-center items-center">
                        {/* Following is an edit button */}
                        <button
                          className="w-[27px] h-[27px]"
                          onClick={(e) => {
                            editTodo(e, item.id);
                          }}
                        >
                          <img
                            className="w-[100%] h-[100%]"
                            src="/assets/edit.svg"
                            alt="edit"
                          />
                        </button>

                        {/* Following is an delete button */}
                        <button
                          className="w-[27px] h-[27px]"
                          onClick={(e) => {
                            deleteTodo(e, item.id);
                          }}
                        >
                          <img
                            className="w-[100%] h-[100%]"
                            src="/assets/delete.svg"
                            alt="delete"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
