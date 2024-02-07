import React from "react";
import CustomButton from "./Button";
import ArrowRight from "./icons/ArrowRight";

const Demo = () => {
  return (
    <section className="bg-silver py-8 text-center flex flex-col justify-center items-center">
      <h2 className="mb-8 text-36 lg:text-64 leading-44 lg:leading-76 max-w-[887px]">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <CustomButton variant={"primary_button_normal"}>
        Get a Demo <ArrowRight w={16} h={16} color={"#fff"} />
      </CustomButton>
    </section>
  );
};

export default Demo;
