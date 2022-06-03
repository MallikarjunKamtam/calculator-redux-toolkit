import React from "react";
import "./memorykeys.css";
import keys from "./keysData";

function Memorykeys() {
  return (
    <div className="memory-keys-container">
      {keys.operators.memory.map((key) => (
        <div className="memory-key" key={key}>
          {key}
        </div>
      ))}
    </div>
  );
}

export default Memorykeys;
