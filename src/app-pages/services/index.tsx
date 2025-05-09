import { FC } from "react";
import { Head, Services } from "./sections_";

interface ServicesPageProps {
  id: string | string[];
  tab: string | string[];
}

export const ServicesPage: FC<ServicesPageProps> = ({ id, tab }) => {
  return (
    <>
      <Head />
      <Services id={id} tab={tab} />
    </>
  );
};
