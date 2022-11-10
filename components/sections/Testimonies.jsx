import React from "react";
import TestimonyCard from "./../Cards/TestimonyCard";

function Testimonies() {
  return (
    <div className="bg-gray">
      <div className="max-w-[1440px]   mx-auto">
        <div className="flex flex-col justify-center items-center py-24">
          <h1 className="font-Fraunces text-6xl font-semibold text-black leading-4rem mt-32 mb-8">
            ❤️ from our clients
          </h1>
          <div className="divide-y-4 bg-chocolate font-Fraunces "></div>
          <div>
            <TestimonyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
