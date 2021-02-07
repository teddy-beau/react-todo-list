const AddTask = ({ input, setInput, tasks, setTasks }) => {
   return (
      <form
         // Upon clicking on submitting an object is pushed to the tasks array.
         // This object consists of a "name" key (string) for the input and a "done" key (boolean) with a default value of "false"
         onSubmit={(event) => {
            event.preventDefault();
            const newTasks = [...tasks];
            newTasks.push({ name: input, done: false });
            setTasks(newTasks);
         }}
      >
         <input
            type="text"
            name="task"
            placeholder="New task"
            value={input}
            // What the users type is added to the input string as they type
            onChange={(event) => {
               setInput(event.target.value);
            }}
         />
         <button type="submit">Add task</button>
      </form>
   );
};

export default AddTask;
