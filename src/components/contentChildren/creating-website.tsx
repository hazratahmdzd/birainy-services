import React from "react";
import Image from "next/image";
import { CREATING_WEBSITE_DATA } from "@/config/constants";

const CreatingWebsite = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {CREATING_WEBSITE_DATA.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-brand-bg rounded-[12px]"
        >
          <div className="flex flex-col gap-2 px-6 pt-6">
            <h3 className="text-lg sm:text-xl text-brand-foreground">{item.title}</h3>
            <p className="text-sm sm:text-base text-brand-foreground/72">{item.description}</p>
          </div>
          <div className="w-4/5 aspect-[646/356] ml-auto relative">
            <Image
              src={item.image}
              alt="website photo"
              fill
              sizes="646"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatingWebsite;
