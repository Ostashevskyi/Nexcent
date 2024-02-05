"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { NAV_LINKS } from "@/constants";

import CustomButton from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-container py-[30px] px-4 flex justify-between items-center ">
      <Link href={"/"}>
        <Image src="/logo.png" width={155} height={24} alt="logo" />
      </Link>

      <ul className={`gap-12 hidden lg:flex`}>
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

      <button className="lg:hidden z-10" onClick={() => setIsOpen(!isOpen)}>
        <Image src={"/menu.png"} width={30} height={24} alt="burger-menu" />
      </button>
    </nav>
  );
};

export default Navbar;
