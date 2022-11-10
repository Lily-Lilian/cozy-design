import Image from "next/image";
import React from "react";
import npca from "../../public/assets/NPCA logo - light.svg";
import funding from "../../public/assets/national funding logo full.svg";
import stream from "../../public/assets/lightstream logo.svg";
import sapeint from "../../public/assets/Sapient.svg";
import fisher from "../../public/assets/hermofisher logo full.svg";
import sony from "../../public/assets/sony logo full.svg";
import sdge from "../../public/assets/sdge logo.svg";

function HappyClients() {
  return (
    <div className="bg-darkgreen overflow-hidden">
      <div className="flex flex-col justify-between max-w-[1120px] mx-auto">
        <h1 className="text-center text-chocolate font-Fraunces text-2xl font-semibold py-8 mt-12">
          More than 150 happy clients
        </h1>
        <div className="flex items-center justify-center w-4/5 py-8 px-5 gap-12">
          <Image className="w-40" src={npca} />
          <Image className="w-24" src={funding} />
          <Image className="w-24" src={stream} />
          <Image className="w-24" src={sapeint} />
          <Image className="w-24" src={fisher} />
          <Image className="w-24" src={sony} />
          <Image className="w-20" src={sdge} />
        </div>
      </div>
    </div>
  );
}

export default HappyClients;
