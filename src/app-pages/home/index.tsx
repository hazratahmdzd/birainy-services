"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HomePage = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-dvh flex-center">
      <Button onClick={() => router.push('/services')} variant="primary" className="text-base sm:text-lg lg:text-xl font-(family-name:--font-space-grotesk)">
        Xidmətlərimiz səhifəsinə keç
      </Button>
    </div>
  );
};
