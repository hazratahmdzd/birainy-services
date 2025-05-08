'use client';
import { Head } from "./sections_";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("./sections_/services/index"), {
  ssr: true,
});

export const ServicesPage = () => {
  return (
    <>
      <Head />
      <Services />
    </>
  );
};
