import React from "react";
import Dine from "./Dine";
import Nap from "./Nap";
import UseState_Hook from "./UseState_Hook";

import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  return (
    <CounterContext.Provider value={10}>
      <div className="App">
        <Dine name="Biryani" sweet="Sheer" />
        {/* <Nap name = "Weeping" play = "Playing"/> */}
        <UseState_Hook />

        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
