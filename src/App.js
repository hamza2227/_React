import React from "react";
import Dine from "./Dine";
import Nap from "./Nap";
import UseState_Hook from "./UseState_Hook";

function App() {
  return (
    <div className="App">
      <Dine name = "Biryani" sweet = "Sheer"/>
      {/* <Nap name = "Weeping" play = "Playing"/> */}
      <UseState_Hook />
    </div>
  );
}

export default App;
