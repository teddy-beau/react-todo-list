import { useState } from "react";
import "./App.css";
// Import of components
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
// Imports to use FontAwesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
library.add(faBackspace);

function App() {
   const [input, setInput] = useState(""); // What will be typed into the inut field
   const [tasks, setTasks] = useState([
      { name: "Hello", done: false },
      { name: "Bye", done: false },
      { name: "Whoop", done: false },
   ]); // Array that will receive an objects for each new task

   return (
      <>
         <h1>Todo List</h1>
         {/* Component that will list the tasks */}
         <Tasks tasks={tasks} setTasks={setTasks} />
         {/* Component that will allow to add a task */}
         <AddTask
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
         />
         <Footer />
      </>
   );
}

export default App;
