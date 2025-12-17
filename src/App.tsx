// import _ from "lodash";
// import { useEffect, useState } from "react";

// import { KeyCode, SOLUTION, MAX_GUESSES, WORD_LENGTH } from "./constants";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Wordle Clone</h1>

      <div>{/* render grid here */}</div>

      <div className="instructions">
        Type your guess and press Enter. Use Backspace to delete.
      </div>
    </div>
  );
}

export default App; 