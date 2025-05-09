import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageSelect } from "@/components";
import { HeaderDrawer } from "./header-drawer";
import { MENU_DATA, SOCIAL_MEDIA_DATA } from "@/config/constants";
import { FullLogo } from "@/components";

export const Header = () => {
  return (
    <header className="w-full container-center pt-4 lg:pt-8 flex items-center max-lg:justify-between gap-8">
      <FullLogo />
      <div className="w-full px-7 py-3.5 max-lg:hidden bg-brand-bg rounded-2xl text-base font-(family:) flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4 xl:gap-7">
          {MENU_DATA.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-brand-foreground text-[15px] xl:text-base"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-7">
          <div className="flex gap-6 items-center max-xl:hidden">
            {SOCIAL_MEDIA_DATA.map(({ icon: Icon, link }, index) => (
              <div key={index} className="flex gap-6 items-center">
                <Link href={link} target="_blank">
                  <Icon
                    size={26}
                    color="var(--color-brand-foreground)"
                  />
                </Link>
                {index !== SOCIAL_MEDIA_DATA.length - 1 && (
                  <div className="min-w-[1px] w-[1px] min-h-6 h-full bg-brand-foreground"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="primary" className="text-base">
              Bizimlə əlaqə
            </Button>
            <LanguageSelect />
          </div>
        </div>
      </div>
      <div className="flex gap-3 lg:hidden">
        <LanguageSelect />
        <HeaderDrawer />
      </div>
    </header>
  );
};
