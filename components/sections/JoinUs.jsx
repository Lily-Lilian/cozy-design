import React from "react";
import Images from "next/image";
import lockup from "../../public/assets/sddd_lockup_reverse.svg";

function JoinUs() {
  return (
    <div className="relative w-full ">
      <video
        loop
        autoPlay
        muted
        class="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/video.mp4" />
      </video>
      <div className="flex space-x-12 justify-center items-center py-40  ">
        <Images className="relative max-w-xs w-40 p-5" src={lockup} />
        <div className=" bg-noise bg-clip-text text-transparent">
          <h1 className="text-5xl text-gray font-Fraunces pb-6">
            Psst…
            <br />
            are you a designer?
          </h1>
          <p className=" text-gray max-w-2xl text-xl leading-large font-normal font-Fraunces">
            Consider joining our
            <span className="text-[#d90f54]">
              San Diego Design Designers
            </span>{" "}
            group. More than 700 people, we meet online via Slack and in person
            at social events around the city. It’s a great opportunity to share
            ideas, get inspired, find support, and celebrate great design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
