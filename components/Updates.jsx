import { UPDATES_CARD_INFO } from "@/constants";
import Image from "next/image";
import React from "react";
import UpdatesCard from "./UpdatesCard";
import CustomButton from "./Button";
import ArrowRight from "./icons/ArrowRight";

const Updates = () => {
  return (
    <section className="text-center mb-10 mx-4">
      <div className="max-w-[628px] m-auto mb-4">
        <h2 className="text-dark_grey mb-2">Caring is the new marketing</h2>
        <p className="regular_2 text-grey ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.​
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap px-4">
        {UPDATES_CARD_INFO.map((card) => (
          <div key={card.id} className="relative mb-32 lg:mb-24">
            <Image src={card.img} alt={card.alt} width={368} height={286} />
            <UpdatesCard>
              <h4 className="text-grey">{card.title}</h4>
              <CustomButton variant={"tertiary_button_normal"}>
                Readmore <ArrowRight color={"#4CAF4F"} w={15} h={8} />
              </CustomButton>
            </UpdatesCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
