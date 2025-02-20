import React from "react";
import AboutUs from "./components/AboutUs";
import HelpingHand from "./components/HelpingHand";
import SmilingChild from "./components/SmilingChild";
import Nurturing from "./components/Nurturing";
import Hope from "./components/Hope";

function App() {
  return (
    <div>
      <div>
        <AboutUs />
        <HelpingHand />
      </div>
      <div>
        <SmilingChild />
        <Nurturing />
        <Hope />
      </div>
    </div>
  );
}
export default App;