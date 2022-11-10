import React from "react";
import Navbar from "../components/layouts/Navbar";

function sayhi() {
  return (
    <div>
      <Navbar />
      <div className="bg-green py-20">
        <div className="text-gray text-center text-4xl py-20">Say-hi</div>
      </div>
    </div>
  );
}

export default sayhi;
