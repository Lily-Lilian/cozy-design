import React from "react";
import Image from "next/image";
import clutch from "../../public/assets/61cba966b768d255e6071b35_Clutch Global 2021-p-500.webp";
import transparent from "../../public/assets/transparent.webp";
import digital from "../../public/assets/Digital Marketing.webp";
import design from "../../public/assets/Design-Companies-Badge.webp";
import Accredited from "../../public/assets/Design-Rush-Accredited-Badge.webp";
import Web from "../../public/assets/Web-Design-Services-San-Diego-California.webp";
import agency from "../../public/assets/verified-agency-vista-badge.png";
import badge from "../../public/assets/new-badge.png";
import business from "../../public/assets/Business Horizontal Seal.svg";

function AwardCard() {
  return (
    <div className="grid grid-cols-2 gap-10 max-w-sm px-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={clutch} />
        <Image src={transparent} />
        <Image src={digital} />
        <Image src={design} />
      </div>
      <div className="flex flex-col  gap-10">
       <p className="flex flex-col items-center text-green font-semibold"><Image  src={business} />BBB rating: A+</p> 
        <Image src={Web} />
        <Image src={agency} />
        <Image src={badge} />
        <Image src={Accredited} />
      </div>
    </div>
  );
}

export default AwardCard;
