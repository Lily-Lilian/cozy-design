import React from "react";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="bg-gray w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <FooterNav />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
