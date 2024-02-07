import Image from "next/image";
import React from "react";
import CustomButton from "./Button";

const Calendar = () => {
  return (
    <section className="flex flex-wrap lg:flex-row justify-around gap-12 xl:gap-0 items-center mb-24 mx-4">
      <Image src={"/calendar.png"} alt="unlock" width={441} height={433} />
      <div className="max-w-[600px]">
        <h2 className="text-dark_grey mb-4">
          How to design your site footer like we did
        </h2>
        <p className="regular_3 text-grey mb-8">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <CustomButton variant={"primary_button_normal"}>
          Learn More
        </CustomButton>
      </div>
    </section>
  );
};

export default Calendar;
