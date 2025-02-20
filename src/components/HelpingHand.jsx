import React from "react";
import boy from "../assets/image (1).jpg";
const HelpingHands = () => {
  return (
    <div className="relative rounded-lg overflow-hidden w-[596px] h-[788px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${boy})` }}>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#093C48] to-[#1590AE] opacity-80"></div>

      {/* Content */}
      <div className="relative p-6 flex flex-col items-start justify-center h-full">
        <h3 className="text-[26px] font-['Shippori Mincho B1',serif] font-bold text-white leading-[122%] w-[422px]">
          Helping Hands, Changing Lives
        </h3>
        <p className="text-[18px] font-['Poppins',sans-serif] text-white tracking-wide leading-[144%] w-[392px] mt-2">
          Our mission is to uplift underprivileged communities through humanitarian aid, skill development, and social welfare initiatives.
        </p>
        
        {/* Button */}
        <button className="mt-6 px-6 py-3 border-2 border-[#F0CF10] text-white text-[18px] font-['Poppins',sans-serif] font-medium rounded-[40px] w-[164px]">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default HelpingHands;
