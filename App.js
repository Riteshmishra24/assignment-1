
import React, { useState } from "react";
import Welcome from "./Components/Welcome";

function App() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <p>
        Enter your name
        <input
          type="text"
          className="mx-1"
          value={text}
          onChange={handleOnChange}/>
      </p>

      <Welcome name={text} />
    </>
  );
}

export default App;
