
import React, { FC } from "react";
import { Button } from "../ui/button";
import { IconPhone, IconClick } from "@tabler/icons-react";
import { ContentChild } from "./content-child";
import { ServiceTabDetailsProps } from "@/types/data";

export const ServiceContent: FC<ServiceTabDetailsProps> = ({
  title,
  description,
  child,
  image,
  video
}) => {
  return (
    <div className="w-full lg:w-[65%] flex flex-col gap-6">
      <h2 className="text-3xl sm:text-[40px] md:text-5xl lg:text-6xl font-normal text-brand-foreground">
        {title}
      </h2>
      <p className="text-sm sm:text-base">{description}</p>
      <div className="flex max-md:flex-col gap-5">
        <div>
          <Button size="lg" variant="primary" className="text-sm sm:text-base">
            <IconPhone className="!w-6 !h-6" />
            Bizimlə əlaqə saxlayın
          </Button>
        </div>
        <div>
          <Button
            size="lg"
            className="cursor-pointer bg-[#e6e6e6] hover:bg-[#e6e6e6] text-brand-foreground text-sm sm:text-base"
          >
            <IconClick className="!w-6 !h-6" />
            İşlərimizə nəzər yetirin
          </Button>
        </div>
      </div>
      <ContentChild { ...(image ? { image } : video ? { video } : { child }) } />
    </div>
  );
};
