import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white rounded-lg ">
      <h2 className="text-[32px] font-bold font-['Shippori_Mincho_B1'] text-[#282536] tracking-[5%] leading-[122%] w-[214px] h-[48px]">
        About Us
      </h2>
      <p className="text-[24px] font-medium font-['Poppins'] text-[#E3501F] leading-[122%] w-[645px] h-[36px] mt-2">
        Compassion in Action, Change in Motion
      </p>
      <p className="text-[24px] font-normal font-['Poppins'] text-[#787878] tracking-[5%] leading-[144%] w-[487px] h-[160px] mt-4">
        At Reach to Care Foundation Trust, we are committed to transforming lives through impactful initiatives in healthcare, education, and social welfare.
      </p>
      <button className="mt-6 px-6 py-3 bg-[#034C5B] text-white rounded-[40px] w-[195px] h-[60px] font-normal font-['Poppins'] text-[18px]">
        Read more
      </button>
    </section>
  );
};

export default AboutUs;

