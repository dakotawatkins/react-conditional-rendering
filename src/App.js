import React from "react";
import Clock from "./Clock";

function App(prop) {
  if (prop.loggedIn == true) {
    return (
      <>
        <Clock />
      </>
    )
  }
  return null
}

export default App;