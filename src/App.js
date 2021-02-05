import { useState } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import "./App.css";

function App() {
   const [input, setInput] = useState("");
   const [tasks, setTasks] = useState([]);
   const [done, setDone] = useState(false);

   return (
      <>
         <h1>Todo List</h1>
         <Tasks
            tasks={tasks}
            setTasks={setTasks}
            done={done}
            setDone={setDone}
         />
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
