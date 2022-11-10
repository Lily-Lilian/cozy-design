import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import cozy from "../../public/assets/getcozy.webp";
function HeroSection() {
  return (
    <div className="hero overflow-hidden ">
      <div className="relative max-w-[1400px] lg:mx-auto ml-6  pt-32 flex lg:justify-between flex-col justify-center  px-5">
        <div className="flex flex-col flex-shrink-0 ">
          <h1 className="lg:text-large text-small bg-noise bg-clip-text text-transparent  max-w-length  bg-chocolate font-black font-hero mix-blend-exclusion leading-md py-3 mt-3">
            Your design team for the cost of a salary.
          </h1>
          <p className="bg-noise max-w-length text-medium bg-clip-text text-transparent font-Fraunces font-semibold mt-3 bg-gray mix-blend-exclusion leading-small py-3">
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don't?
          </p>
          <Button> See How We Work & What We Can Do</Button>
        </div>
        <div className="lg:w-[846px] lg:absolute sticky lg:mb-0 -mb-[100px] right-0 lg:-mr-[220px] lg:mt-[100px] ">
          <Image src={cozy} alt="get-cozy" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
