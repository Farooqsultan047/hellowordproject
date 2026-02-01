import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Hello World");

  return (
    <div className="container">
      <h1>{text}</h1>
      <p>Welcome to my React Project</p>
      <button onClick={() => setText("Hello React Developer!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
