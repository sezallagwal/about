import React from "react";
import SmilingGirl from "../assets/Intersect.jpg";

const SmilingChild = () => {
  return (
    <div className="relative w-full h-[800px] flex items-center justify-end">
      {/* Radial Blur Background */}
      <div
        className="absolute w-[695px] h-[695px] rounded-full bg-[#FCD9C5] blur-3xl"
        style={{
          top: "234px",
          left: "1012px",
          transform: "translateX(-50%)", // Center it properly
        }}
      ></div>

      {/* Smiling Girl Image */}
      <img
        src={SmilingGirl}
        alt="Smiling Girl"
        className="absolute w-[482px] h-[621px] object-cover"
        style={{
          top: "98px",
          left: "1135px",
        }}
      />
    </div>
  );
};

export default SmilingChild;

