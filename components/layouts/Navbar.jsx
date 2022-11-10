import Image from "next/image";
import React from "react";
import menu from "../../public/assets/menu.svg";
import Link from "next/link";
import logo from "../../public/assets/Cozy_logo_canvas.svg";

const Navbar = () => {
  const navLinks = [
    { text: "Get Cozy", page: "get-cozy" },
    { text: "What We do", page: "about-us" },
    { text: "Our Work", page: "our-work" },
    { text: "The blog", page: "blog" },
    { text: "Say hi", page: "say-hi" },
  ];
  return (
    <div className="content-wrapper w-full bg-color fixed py-6 overflow-auto flex-wrap z-50  ">
      <nav className="ml-14 mr-10 flex lg:justify-between justify-center gap-8 items-center cursor-pointer">
        <Link href="./">
          <li className="max-w-xs list-none">
            <Image className=" w-20" src={logo} />
          </li>
        </Link>
        <li className="flex lg:hidden">
          <Image className="w-10" src={menu} />
        </li>
        <div className="lg:flex hidden list-none space-x-8 flex-end text-gray text-2xl shadow-none font-hero">
          {navLinks.map((link, index) => (
            <Link href={`/${link.page}`}>
              <div
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-chocolate duration-300"
                key={index}
              >
                {link.text}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
