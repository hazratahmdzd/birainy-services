import { ServicesPage } from "@/app-pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIRainy | Analitika, tətbiqlərin hazırlanması xidməti",
  description:
    "BIRainy - Analitika, tətbiqlərin hazırlanması, veb saytların hazırlanması, mobil tətbiqlərin hazırlanması",
};

const Services = () => {
  return (
    <div>
      <ServicesPage />
    </div>
  );
};

export default Services;
