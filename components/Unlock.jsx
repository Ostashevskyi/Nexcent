import Image from "next/image";
import React from "react";
import CustomButton from "./Button";

const Unlock = () => {
  return (
    <section className="flex flex-wrap lg:flex-row justify-around gap-12 xl:gap-0 items-center mb-24 mx-4">
      <Image src={"/unlock.png"} alt="unlock" width={441} height={329} />
      <div className="max-w-[661px]">
        <h2 className="text-dark_grey mb-4 max-w-[600px]">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="regular_3 text-grey mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <CustomButton variant={"primary_button_normal"}>
          Learn More
        </CustomButton>
      </div>
    </section>
  );
};

export default Unlock;
