const Tasks = ({ tasks, setTasks }) => {
   return tasks.map((element, index) => {
      return (
         <div className="task" key={index}>
            <input
               type="checkbox"
               id={index}
               onClick={() => {
                  if (element.done) {
                     const newTasks = [...tasks];
                     newTasks[index].done = false;
                     setTasks(newTasks);
                  } else {
                     const newTasks = [...tasks];
                     newTasks[index].done = true;
                     setTasks(newTasks);
                  }
               }}
            />

            <label
               for={index}
               style={{
                  textDecorationLine:
                     element.done === true ? "line-through" : "none",
               }}
            >
               {element.name}
            </label>

            <button
               onClick={() => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1);
                  setTasks(newTasks);
               }}
            >
               X
            </button>
         </div>
      );
   });
};

export default Tasks;
