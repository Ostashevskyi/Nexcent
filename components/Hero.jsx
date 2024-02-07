import React from "react";
import CustomButton from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex px-4 justify-center xs:flex-col xs:gap-24 lg:flex-row bg-silver pb-24">
      <div className="max-w-[657px]">
        <h1 className="text-dark_grey mb-4">
          Lessons and insights{" "}
          <span className="text-primary">from 8 years</span>
        </h1>
        <p className="text-grey mb-8">
          Where to grow your business as a photographer: site or social media?
        </p>
        <CustomButton variant={"primary_button_normal"}>Register</CustomButton>
      </div>
      <div>
        <Image src={"/hero.png"} alt="hero" width={407} height={391} />
      </div>
    </section>
  );
};

export default Hero;
