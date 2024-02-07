import { FOOTER_SOCIALS_ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container bg-black py-16 px-4 grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <div>
        <Image
          src={"/logo_white.png"}
          alt="logo"
          width={191}
          height={30}
          className="mb-10"
        />
        <div className="regular_3 text-silver mb-10">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>

        <div className="flex gap-4">
          {FOOTER_SOCIALS_ICONS.map((icon) => (
            <div className="w-8 h-8 bg-white_10 rounded-full flex items-center justify-center ">
              <Link href="/">
                <Image src={icon.icon} alt="alt" width={17} height={17} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-24"> */}
      <div className="flex gap-20">
        <div>
          <h4 className="text-white mb-6">Company</h4>
          <ul className="text-silver flex flex-col gap-3">
            <Link href="/">About us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Testimonials</Link>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-6">Support</h4>
          <ul className="text-silver flex flex-col gap-3">
            <Link href="/">Help center</Link>
            <Link href="/">Terms of service</Link>
            <Link href="/">Legal</Link>
            <Link href="/">Privacy policy</Link>
            <Link href="/">Status</Link>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-white mb-6">Stay up href date</h4>
        <div className="flex bg-white_20 px-3 py-3 rounded-lg items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent outline-none text-white"
          />
          <Link href="/">
            <Image src={"/send.svg"} alt="send" width={17} height={17} />
          </Link>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
