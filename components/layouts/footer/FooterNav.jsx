import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/Cozy_logo_denim.svg";
import emoji from "../../../public/assets/emoji@2x.webp";
import twitter from "../../../public/assets/twitter-icon-white.svg";
import linkeldn from "../../../public/assets/logo linkedin.svg";
import facebook from "../../../public/assets/facebook-icon-white.svg";
import insta from "../../../public/assets/instagram-icon-white.svg";
import utube from "../../../public/assets/icn_youtube-white.svg";
import cocial from "../../../public/assets/clutch.svg";
import email from "../../../public/assets/icon envelope.svg";

function FooterNav() {
  return (
    <div className="flex  justify-between items-center py-12 border-b-2 border-hashtag">
      <div className="flex  items-center space-x-12">
        <Image className="w-20" src={logo} />
        <div className="flex list-none text-hashtag text-sm font-semibold space-x-4">
          <li>About</li>
          <li>Services</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>
      </div>
      <div className="flex items-center  space-x-12">
        <li className="flex items-center space-x-2">
          <Image className="w-6 h-6" src={emoji} />
          <p className="text-[#d90f54] text-xs font-semibold">
            {" "}
            San Diego Digital Designers
          </p>
        </li>

        <div className="flex">
          <Image
            className="bg-[#1da1f2] w-6 h-6 p-[6px] m-1 rounded"
            src={twitter}
          />
          <Image
            className="bg-[#2977c9] w-6 h-6 p-[6px] m-1 rounded"
            src={linkeldn}
          />
          <Image
            className="bg-[#4267b2] w-6 h-6 p-[6px] m-1 rounded"
            src={facebook}
          />
          <Image
            className="bg-[#e4405f] w-6 h-6 p-[6px]  m-1 rounded"
            src={insta}
          />
          <Image
            className="bg-[#c4302b] w-6 h-6 p-[6px] m-1 rounded"
            src={utube}
          />
          <Image
            className=" bg-[#16313a] w-6 h-6 p-[6px] m-1 rounded"
            src={cocial}
          />
          <Image
            className="bg-[#223240] w-6 h-6 p-[6px] m-1 rounded"
            src={email}
          />
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
