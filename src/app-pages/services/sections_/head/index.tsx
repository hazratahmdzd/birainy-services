import { Order, Star } from "@/components";
import React from "react";

export const Head = () => {
  return (
    <div className="container-center mt-6 mb-4 sm:mt-12 sm:mb-6 lg:mt-18 lg:mb-12">
      <div className="flex items-end gap-5 justify-between pb-8 border-b border-brand-foreground">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:max-w-[780px]">
          <Star />
          <h1 className="text-4xl md:text-6xl lg:text-7xl">Xidmətlərimiz</h1>
          <p className="text-sm sm:text-base text-brand-foreground/72">
            Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
            avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
            şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
          </p>
        </div>
        <div className="max-lg:hidden">
          <Order />
        </div>
      </div>
    </div>
  );
};
