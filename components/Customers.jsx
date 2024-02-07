import React from "react";
import Image from "next/image";
import { CUSTOMERS_SECTION_ICONS } from "@/constants";
import CustomButton from "./Button";
import ArrowRight from "./icons/ArrowRight";

const Customers = () => {
  return (
    <section className="flex justify-center gap-20 bg-silver py-8 flex-wrap mb-12 xs:px-4 md:px-0">
      <div>
        <Image src={"/customer.png"} alt="customer" width={330} height={330} />
      </div>
      <div className="max-w-[748px]">
        <p className="regular_2 text-grey mb-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h4 className="text-primary mb-2">Tim Smith</h4>
        <p className="text-light_grey mb-6">
          British Dragon Boat Racing Association
        </p>

        <div className="flex gap-8 flex-wrap xs:flex-col md:flex-row">
          <div className="grid grid-cols-2  justify-items-center md:grid-cols-6  gap-10  flex-wrap">
            {CUSTOMERS_SECTION_ICONS.map((icon) => (
              <Image
                alt={icon.alt}
                src={icon.url}
                key={icon.id}
                width={48}
                height={48}
              />
            ))}
          </div>
          <div className="max-w-[223px]">
            <CustomButton variant={"tertiary_button_normal"}>
              Meet all customers <ArrowRight h={24} w={24} color={"#4CAF4F"} />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
