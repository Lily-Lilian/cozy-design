import Image from "next/image";
import React from "react";
import snap from "../../../public/assets/Screen_Shot.png";
import business from "../../../public/assets/Business Horizontal Seal.svg";
import bureau from "../../../public/assets/shield-logo-member-p-500.png";

function FooterBottom() {
  return (
    <div className="flex  items-center justify-between font-Fraunces">
      <div className="flex space-x-8 items-center py-10">
        <p className="flex flex-col pt-4 items-center text-green font-semibold">
          <Image className="max-w-[140px]" src={business} alt="" />
          BBB rating: A+
        </p>
        <Image className="max-w-[140px]" src={bureau} alt="" />
        <Image
          className="max-w-[200px]  rounded-tr-[25px] rounded-bl-[25px] rounded"
          src={snap}
        />
      </div>
      <div className="flex py-20 space-x-12">
        <p className="text-left text-xs text-green font-normal font-Fraunces">
          Made with ❤️ in beautiful, sunny San Diego. ©2021
        </p>
        <div className="flex space-x-4 text-xs text-hashtag list-none ">
          <li>Privacy</li>
          <li>Photo credit</li>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
