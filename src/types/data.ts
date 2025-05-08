import { ContentChildProps } from "./components";


export interface MenuItemProps {
  title: string;
  link: string;
}

export type ServiceTabDetailsProps = ContentChildProps & {
  title: string;
  description: string;
}

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
