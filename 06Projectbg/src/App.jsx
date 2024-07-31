import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="py-5 px-4" style={{ backgroundColor: color }}>
      <div className="gap-4 space-x-10">
        <button
          className="bg-white py-3 px-3 rounded"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-white py-3 px-3 rounded"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-white py-3 px-3 rounded"
          style={{ backgroundColor: "blue" }}
          onClick={()=>setColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
