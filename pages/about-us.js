import React from "react";
import Navbar from "../components/layouts/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-green py-20">
        <div className="text-gray text-center mt-60 text-4xl py-20">
          Our services
        </div>
      </div>
    </div>
  );
}

export default About;
