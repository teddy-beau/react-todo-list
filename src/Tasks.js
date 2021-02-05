const Tasks = ({ tasks, setTasks, done, setDone }) => {
   return tasks.map((element, index) => {
      return (
         <div className="task" key={index}>
            <input
               type="checkbox"
               id={index}
               onClick={() => {
                  if (done) {
                     setDone(false);
                  } else {
                     setDone(true);
                  }
               }}
            />

            <label
               for={index}
               style={{
                  textDecorationLine: done === true ? "line-through" : "none",
               }}
            >
               {element}
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
