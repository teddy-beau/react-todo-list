const AddTask = ({ input, setInput, tasks, setTasks }) => {
   return (
      <form
         onSubmit={(event) => {
            event.preventDefault();
            const newTasks = [...tasks];
            console.log("log1: ", newTasks);
            newTasks.push({ name: input, done: false });
            console.log("log1: ", newTasks);
            setTasks(newTasks);
         }}
      >
         <input
            type="text"
            name="task"
            placeholder="New task"
            value={input}
            onChange={(event) => {
               setInput(event.target.value);
            }}
         />
         <button type="submit">Add task</button>
      </form>
   );
};

export default AddTask;
