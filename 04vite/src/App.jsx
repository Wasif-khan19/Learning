
import { useState } from "react";


const App = () => {  

  let [counter, setCounter] = useState(0) 

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  };

  return (
    <div className="flex items-center justify-between">
      <h1>Muhammad Wasif</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div> 
  );
};

export default App;
