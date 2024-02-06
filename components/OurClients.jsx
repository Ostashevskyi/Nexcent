import { CLIENTS_ICONS } from "@/constants";
import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <section className="text-center my-10">
      <h2 className="text-dark_grey mb-2"> Our Clients</h2>
      <p className="regular_2 text-grey mb-4 mx-4">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex gap-32 justify-center flex-wrap ">
        {CLIENTS_ICONS.map((icon) => (
          <Image
            key={icon.id}
            src={icon.url}
            alt={icon.alt}
            width={48}
            height={48}
          />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
