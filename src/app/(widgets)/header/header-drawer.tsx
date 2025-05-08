"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconMenu2,
} from "@tabler/icons-react";
import { MENU_DATA } from "@/config/constants";
import Link from "next/link";
import Image from "next/image";

export function HeaderDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button aria-label="burger-menu" variant="primary" size="icon">
          <IconMenu2 size={20} className="!w-6 !h-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!w-full">
        <div className="h-full container-center py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-start">
            {MENU_DATA.map((item, index) => (
              <DrawerClose key={index} asChild>
                <DrawerTitle asChild>
                  <Link href={item.link} className="text-[26px]">
                    {item.title}
                  </Link>
                </DrawerTitle>
              </DrawerClose>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-start">
            <span className="text-xl font-semibold text-[#555555]">
              Bizi izləyin
            </span>
            <div>
              <div className="flex gap-6 items-center">
                <div className="p-2 border border-[#e5e7eb] rounded-[8px]">
                  <IconBrandInstagram size={20} color="#AFAFAF" />
                </div>
                <div className="p-2 border border-[#e5e7eb] rounded-[8px]">
                  <IconBrandLinkedin size={20} color="#AFAFAF" />
                </div>
                <div className="p-2 border border-[#e5e7eb] rounded-[8px]">
                  <IconBrandTiktok size={20} color="#AFAFAF" />
                </div>
              </div>
            </div>
            <div className="w-full aspect-[778/209] relative rounded-xl overflow-hidden">
              <Image src='/webp/academy-banner.webp' alt="birainy academy banner" fill objectFit="cover" />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
