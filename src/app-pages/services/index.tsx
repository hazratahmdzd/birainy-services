import { FC } from "react";
import { Head, Services } from "./sections_";

interface ServicesPageProps {
  id: string;
  tab: string;
}

export const ServicesPage: FC<ServicesPageProps> = ({ id, tab }) => {
  return (
    <>
      <Head />
      <Services id={id} tab={tab} />
    </>
  );
};
