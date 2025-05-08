import { ComponentType } from "react";
import { ContentChildProps } from "./components";
import { IconProps } from "@tabler/icons-react";

export interface MenuItemProps {
  title: string;
  link: string;
}

export interface SocialMediaDataProps {
  link: string;
  icon: ComponentType<IconProps>;
}

export interface AddressDataProps {
  title: string;
  description: string;
}

export interface ContactDetailsProps {
  title: string;
  href: string;
}

export type ServiceTabDetailsProps = ContentChildProps & {
  title: string;
  description: string;
};

export interface ServiceTabProps {
  tab: string;
  title: string;
  path: string;
  details: ServiceTabDetailsProps;
}

export type ServiceDataProps =
  | {
      id: string;
      title: string;
      path: string;
      childrens: ServiceTabProps[];
      details?: never;
    }
  | {
      id: string;
      title: string;
      path: string;
      childrens?: never;
      details: ServiceTabDetailsProps;
    };
