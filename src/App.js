import React from "react";
import AboutUs from "./components/AboutUs";
import HelpingHand from "./components/HelpingHand";
import SmilingChild from "./components/SmilingChild";
import Nurturing from "./components/Nurturing";
import Hope from "./components/Hope";

function App() {
  return (
    <div className="flex w-full h-screen bg-white">
      {/* Left Side - About Us & Helping Hand */}
      <div className="w-1/2 flex flex-col gap-6">
        <AboutUs />
        <HelpingHand />
      </div>

      {/* Right Side - Smiling Child, Nurturing, Hope */}
      <div className="w-1/2 relative">
        <SmilingChild />
        <Nurturing />
        <Hope />
      </div>
    </div>
  );
}

export default App;
