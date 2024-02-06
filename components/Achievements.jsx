import { ACHIEVEMENTS_INFO } from "@/constants";
import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <section className="bg-silver flex justify-around items-center flex-wrap px-4 mb-12">
      <div className="my-20">
        <h2 className="mb-2 text-dark_grey">
          Helping a local <br />
          <span className="text-primary">business reinvent itself</span>
        </h2>
        <p className="text-grey">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-10 xs:my-6 xl:my-16">
        {ACHIEVEMENTS_INFO.map((achievement) => (
          <div key={achievement.id} className="flex items-center gap-4">
            <Image
              src={achievement.icon}
              alt="achievement-icon"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <h3 className="text-dark_grey">{achievement.number}</h3>
              <p className="text-grey">{achievement.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
