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
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const id = resolvedParams.id ?? "1";
  const tab = resolvedParams.tab ?? "1";

  return (
    <div>
      <ServicesPage id={id} tab={tab} />
    </div>
  );
}
