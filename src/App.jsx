import { useState } from "react";
import "./App.css";

function App() {
  const [write, setWrite] = useState("");

  const show = () => {
    setWrite(e.terget.value);
  };

  return (
    <>
      <input
        value={write}
        onChange={(e) => setWrite(e.target.value)}
        type="text"
      />
      <h1>{show}</h1>
    </>
  );
}

export default App;
