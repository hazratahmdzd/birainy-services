"use client";
import { useSearchParams } from "next/navigation";
import { Head, Services } from "./sections_";

export const ServicesPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "1";
  const tab = searchParams.get("tab") || "1";
  return (
    <>
      <Head />
      <Services id={id} tab={tab} />
    </>
  );
};
