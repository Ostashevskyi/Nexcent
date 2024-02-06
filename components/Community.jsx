import { COMMUNITY_CARDS_INFO } from "@/constants";
import React from "react";
import CommunityCard from "./CommunityCard";
import Image from "next/image";

const Community = () => {
  return (
    <section className="text-center mb-24">
      <h2 className="max-w-[542px] m-auto text-dark_grey mb-2">
        Manage your entire community in a single system
      </h2>
      <p className="regular_2 text-grey mb-4">Who is Nextcent suitable for?</p>

      <div className="flex justify-around flex-wrap lg:flex-row ">
        {COMMUNITY_CARDS_INFO.map((card) => (
          <CommunityCard key={card.id}>
            <div className="relative mb-8">
              <Image src={card.icon} alt={card.alt} width={48} height={48} />
              <div className="w-[50px] h-[50px] bg-tint_5 absolute -top-1 -right-4 -z-10 rounded-lg rounded-br-2xl"></div>
            </div>
            <h3 className="mb-2 text-dark_grey">{card.title}</h3>
            <p className="regular_3 text-grey">{card.text}</p>
          </CommunityCard>
        ))}
      </div>
    </section>
  );
};

export default Community;
