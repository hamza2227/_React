import React from "react";
import Dine from "./Dine";
import Nap from "./Nap";

function App() {
  return (
    <div className="App">
      <Dine name = "Biryani" sweet = "Sheer"/>
      <Nap name = "Weeping" play = "Playing"/>
    </div>
  );
}

export default App;
