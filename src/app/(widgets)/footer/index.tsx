import React from "react";
import {
  MENU_DATA,
  SOCIAL_MEDIA_DATA,
  ADDRESS_DATA,
  CONTACT_DETAILS_DATA,
} from "@/config/constants";
import Link from "next/link";
import Image from "next/image";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-foreground">
      <div className="container-center">
        <div className="flex flex-col lg:flex-row lg:justify-between pt-8 pb-16 gap-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-[28px] sm:text-[40px] md:text-5xl">
              Bizimlə indi əlaqəyə keçin
            </h1>
            <div className="flex flex-col md:flex-row md:flew-wrap gap-4 sm:gap-6 lg:gap-8">
              {MENU_DATA.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-lg text-white font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start lg:items-end">
            <h2 className="text-base sm:text-lg text-white">Bizi izləyin</h2>
            <div className="flex items-center gap-4">
              {SOCIAL_MEDIA_DATA.map(({ icon: Icon, link }, index) => (
                <Link
                  aria-label={`follow us on ${link}`}
                  key={index}
                  href={link}
                  target="_blank"
                  className="w-12 h-12 sm:w-16 sm:h-16 flex-center border border-white rounded-[50%]"
                >
                  <Icon
                    color="white"
                    className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-white"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-6 pb-12">
          {ADDRESS_DATA.map((address, index) => (
            <div key={index} className="flex flex-col gap-2 sm:gap-4">
              <h3 className="text-base sm:text-xl text-white">
                {address.title}
              </h3>
              <span className="text-sm sm:text-base text-white/60">
                {address.description}
              </span>
            </div>
          ))}
        </div>
        <div className="py-8 flex flex-col lg:flex-row gap-6 lg:justify-between border-t border-white">
          <div className="flex items-center gap-4">
            <IconRosetteDiscountCheckFilled
              size={40}
              color="var(--color-brand)"
              className="min-w-10"
            />
            <span className="text-white text-base font-semibold">
              Partner with
            </span>
            <Image
              src="https://birainy.com/_next/static/media/microsoft.9f8da16c.svg"
              alt="microsoft logo"
              width={101}
              height={26}
              className="w-[101px] aspect-[101/26]"
            />
          </div>
          <div className="flex gap-x-8 gap-y-4 flex-wrap">
            {CONTACT_DETAILS_DATA.map((contact, index) => (
              <Link
                aria-label={`contact with ${contact.title} `}
                key={index}
                href={contact.href}
              >
                <span className="text-white text-[15px] sm:text-lg font-semibold">
                  {contact.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
