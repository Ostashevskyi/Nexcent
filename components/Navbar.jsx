"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { NAV_LINKS } from "@/constants";

import CustomButton from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <nav className="max-container bg-silver py-[30px] xs:px-4 xl:px-[100px] flex justify-between items-center sticky top-0 z-20 w-full h-fit lg:static">
      <Link href={"/"}>
        <Image src="/logo.png" width={155} height={24} alt="logo" />
      </Link>

      <ul
        className={`gap-12 lg:flex ${
          isOpen
            ? "flex flex-col absolute top-0 right-0 items-center justify-center w-full bg-white h-screen z-40 transition-all translate-y-0"
            : "xs:absolute xs:-translate-y-96 xs:flex xs:flex-col lg:flex-row lg:static lg:translate-y-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </ul>

      <div className="gap-3 hidden lg:flex">
        <CustomButton variant={"tertiary_button_medium"}>Login</CustomButton>
        <CustomButton variant={"primary_button_medium"}>Login</CustomButton>
      </div>

      <button
        className="lg:hidden z-50"
        onClick={() => {
          setIsOpen(!isOpen);
          document.documentElement.classList.toggle("fixed");
        }}
      >
        <Image src={"/menu.png"} width={30} height={24} alt="burger-menu" />
      </button>
    </nav>
  );
};

export default Navbar;
