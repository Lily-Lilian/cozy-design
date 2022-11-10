import React from "react";
import Button from "../ui/Button";
import AwardCard from "../Cards/AwardCard";

function AboutUs() {
  return (
    <div className="w-full ">
      <div className="bg-land bg-cover ">
        <div className=" relative lg:flex  lg:flex-row flex flex-col py-32 px-4 lg:items-center max-w-[1400px] mx-auto">
          <div className="p-left flex flex-col">
            <div className="uppercase text-black mb-4 text-3xl font-bold leading-xsmall">
              🌴🐻🇺🇸
            </div>
            <h1 className="uppercase  text-black font-Fraunces text-5xl lg:text-7xl leading-md font-semibold mt-10 mb-3">
              Get Cozy
            </h1>
            <h2 className="text-primary  font-normal text-4xl  font-Fraunces max-w-lg ">
              Design & digital marketing in San Diego, California
            </h2>
            <p className="bg-black font-normal bg-clip-text text-transparent text-xl font-Fraunces leading-large max-w-xl mt-10 mb-4">
              We’re an award-winning design shop based in South Park, San Diego.
              We efficiently combine the best parts of user experience (UX) with
              creative design and execution to create effective collateral that
              connects with the human beings who interact with them.😘
            </p>
            <p className="text-black font-normal text-xl font-Fraunces leading-large max-w-xl mb-4">
              No epic quests for inspiration. Just pragmatic collaboration and
              efficient results from big-agency graduates with decades of
              experience.
            </p>
            <Button className={"py-6 px-6"}>Why we do what we do</Button>
          </div>
          <AwardCard />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
