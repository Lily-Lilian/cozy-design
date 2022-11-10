import React from "react";

function button({className,children}) {
  return (
    <div className="py-12">
      <button className={`${className} bg-hashtag rounded-md px-12 py-6 uppercase bg-noise text-xl text-gray  font-semibold`}>
       {children}
      </button>
    </div>
  );
}

export default button;
