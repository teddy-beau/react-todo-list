import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({ tasks, setTasks }) => {
   // Function to define what happens when clicking "Add task" button
   const handleCheck = (element, index) => {
      // Upon clicking on the checkbox, if the "done" key is set to true, it is toggled to false
      if (element.done) {
         const newTasks = [...tasks];
         const doneTask = tasks[index];
         newTasks[index].done = false;
         newTasks.splice(index, 1);
         newTasks.unshift(doneTask);
         setTasks(newTasks);
         // Else, it is toggled to true
      } else {
         const newTasks = [...tasks];
         const doneTask = tasks[index];
         newTasks[index].done = true;
         newTasks.splice(index, 1);
         newTasks.push(doneTask);
         setTasks(newTasks);
      }
   };
   // Function to handle task deletion
   const handleDelete = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
   };

   // Looping through the array of tasks:
   return tasks.map((element, index) => {
      return (
         <div className="task" key={index}>
            <input
               type="checkbox"
               id={index}
               onClick={() => handleCheck(element, index)}
               // If the task is done the checkbox is checked
               checked={tasks[index].done === false ? false : true}
            />

            <label
               for={index}
               // When the "done" key is set to true, the task's name will be struckthrough
               style={{
                  textDecorationLine:
                     element.done === true ? "line-through" : "none",
               }}
            >
               {element.name}
            </label>

            <FontAwesomeIcon
               className="delete"
               icon="backspace"
               color="#4eb5a4"
               // Upon clicking of the icon, the current task object will be removed from the array of tasks
               onClick={() => handleDelete(index)}
            />
         </div>
      );
   });
};

export default Tasks;
