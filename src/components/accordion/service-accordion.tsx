"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { SERVICES_DATA } from "@/config/constants";

export const ServiceAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:w-[35%] flex flex-col gap-3"
      value={openItem as string | undefined}
      onValueChange={(value) => setOpenItem(value)}
    >
      {SERVICES_DATA.map((item, index) => {
        return item.childrens ? (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-brand-bg border border-transparent rounded-[12px] hover:border-brand transition-colors"
          >
            <Link href={item.path}>
              <AccordionTrigger className="px-8 py-6 text-xl xl:text-2xl text-brand-foreground cursor-pointer">
                {item.title}
              </AccordionTrigger>
            </Link>
            <AccordionContent className="px-8 py-6 text-xl xl:text-2xl text-brand-foreground">
              <div className="flex flex-col gap-4">
                {item.childrens.map((childItem, childIndex) => (
                  <Link
                    key={childIndex}
                    href={childItem.path}
                    className="text-brand-foreground/50"
                  >
                    {childItem.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ) : (
          <Link
            key={index}
            href={item.path}
            onClick={() => setOpenItem(null)}
            className="bg-brand-bg px-8 py-6 border border-transparent rounded-[12px] hover:border-brand cursor-pointer text-xl xl:text-2xl font-semibold text-brand-foreground transition-all"
          >
            {item.title}
          </Link>
        );
      })}
    </Accordion>
  );
};
