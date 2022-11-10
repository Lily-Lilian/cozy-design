import Image from "next/image";
import React from "react";
import susie from "../../public/assets/susie.webp";
import Martin from "../../public/assets/Martin.webp";
import Michael from "../../public/assets/Michael.webp";
import Eric from "../../public/assets/Eric.webp";

function TestimonyCard() {
  return (
    <div className=" space-y-8 items-center max-w-[1024px]">
      <div className="flex space-x-6 items-end">
        <div className="h-fit flex-1  flex items-center flex-col  py-20 pr-10 pl-[60px] gap-4 bg-black bg-noise shadow-xl rounded-tl-[80%] rounded-tr-[80%]  rounded-bl-[100%] rounded-br-[0]">
          <div className="font-Fraunces text-right flex flex-col">
            <div className="w-20 h-20 mb-6 mt-2 self-center">
              <Image
                src={susie}
                className="rounded-[32%] mix-blend-luminosity  border-4 border-white"
              />
            </div>
            <h1 className="text-chocolate font-semibold text-xl m-2">
              “One of the top design professionals…”
            </h1>
            <p className="text-gray font-Fraunces font-normal m-4">
              "I connect with hundreds of talented folks on a regular basis, and
              I can say with complete confidence that Lee is one of the best UX
              designers in Aquent/Vitamin T's global network."
            </p>
            <p className="text-gray uppercase font-Fraunces text-xs">
              "SUSIE POLLASKY"
            </p>
            <p className="text-gray font-Fraunces text-xs  opacity-[.7] leading-[16px] ">
              Now: Leadership Recruiting @ Product Design at Facebook
            </p>
          </div>
        </div>
        <div className="flex-1 inline-block py-20 pr-10   pl-[3.75rem] flex-col  space-y-8 items-center align-center  bg-green bg-noise rounded-tl-[100%] rounded-tr-[100%] h-full rounded-bl-[0%] rounded-br-[50%] ">
          <div className="font-Fraunces text-right flex flex-col py-16 px-6">
            <div className="w-20 h-20 mb-6 self-center">
              <Image
                src={Martin}
                className=" self-end rounded-[32%] mix-blend-luminosity  border-4 border-white "
              />
            </div>
            <h1 className="text-chocolate font-semibold text-xl font-Fraunces text-left">
              “They’re a very well-rounded organization…”
            </h1>
            <p className="text-gray font-Fraunces font-normal text-left max-w-lg pt-4 text-xl leading-large">
              "Cost per conversion and all of those metrics have dropped
              significantly. We used to pay an average of $100 per lead that
              converts… now we have that down to about $20. Sessions and
              contacts have also gone up astronomically, at least threefold.
              Organic search and social media referrals have all continued to
              skyrocket. We’re really pleased."
            </p>
            <p className="text-gray uppercase font-Fraunces text-left text-xs pt-4  ">
              MARTIN SPRITZER
            </p>
            <p className="text-gray font-Fraunces text-left text-sm opacity-[.7] leading-[16px] ">
              General Manager @ iQuoteXpress
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="flex flex-1">
          <div className=" py-20 pr-10 pl-[60px] flex flex-col gap-4 shadow-xl h-full bg-primary bg-noise  rounded-tl-[100%] rounded-bl-[60%] rounded-br-[60%]  ">
            <div className="w-20 h-20 mb-6 self-end">
              <Image
                src={Eric}
                className={`rounded-[32%] mix-blend-luminosity  border-4 border-white `}
              />
            </div>
            <h1 className="text-chocolate font-semibold text-right text-xl font-Fraunces ">
              “They're just good people.”
            </h1>
            <p className="text-gray font-Fraunces  font-normal text-right  text-lg leading-large">
              They were a pleasure to work with and I'm really happy with the
              results. They pretty much nailed it.
            </p>
            <p className="text-gray uppercase font-Fraunces text-right text-xs  ">
              ERIC WEISS
            </p>
            <p className="text-gray font-Fraunces text-xs text-right">
              Founder @ Full Cycle Product Development
            </p>
          </div>
        </div>

        <div className="flex flex-1 ">
          <div className="flex flex-col gap-4 py-20 pr-10 pl-[60px] shadow-xl h-full bg-hashtag bg-noise rounded-tr-[100%] rounded-bl-[60%] rounded-br-[60%]">
            <div className="w-20 h-20 mb-6 self-start">
              <Image
                src={Michael}
                className={`rounded-[32%] mix-blend-luminosity  border-4 border-white `}
              />
            </div>
            <h1 className="text-chocolate font-semibold text-xl font-Fraunces text-left">
              “The project was successful”
            </h1>
            <p className="text-gray font-Fraunces font-normal text-left text-lg leading-large">
              They strive to come up with good design, and they focus on all the
              right things. The quality of their work is high, and all the
              deliverables are very well-organized and professional.
            </p>
            <p className="text-gray uppercase font-Fraunces text-left text-xs  ">
              MICHAEL WEISFELD
            </p>
            <p className="text-gray font-Fraunces text-left text-xs  ">
              Director of Digital Marketing @ National Funding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonyCard;
