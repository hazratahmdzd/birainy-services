import { ServicesPage } from "@/app-pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIRainy | Analitika, tətbiqlərin hazırlanması xidməti",
  description:
    "BIRainy - Analitika, tətbiqlərin hazırlanması, veb saytların hazırlanması, mobil tətbiqlərin hazırlanması",
};

export default async function Services({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams.id ?? "1";
  const tab = searchParams.tab ?? "1";

  return (
    <div>
      <ServicesPage id={id} tab={tab} />
    </div>
  );
}
