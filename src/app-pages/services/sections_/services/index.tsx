"use client";
import React from "react";
import { ServiceAccordion, ServiceContent } from "@/components";
import { useSearchParams } from "next/navigation";
import { SERVICES_DATA } from "@/config/constants";

const Services = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const tab = searchParams.get("tab");

  const activeTab = SERVICES_DATA.find((item) => item.id === id);
  const activeTabContent = activeTab?.childrens?.find(
    (item) => item.tab === tab
  );
  const activeTabDetails = activeTab?.details;

  return (
    <div className="container-center relative py-5 mb-50 flex max-lg:flex-col gap-8">
      <div className="w-full lg:w-[35%] lg:sticky lg:top-5">
        <ServiceAccordion />
      </div>
      {activeTabContent && (
        <ServiceContent
          title={activeTabContent.details.title}
          description={activeTabContent.details.description}
          {...(activeTabContent.details.image ? { image: activeTabContent.details.image } : activeTabContent.details.video ? { video: activeTabContent.details.video } : { child: activeTabContent.details.child })}
        />
      )}
      {activeTabDetails && (
        <ServiceContent
          title={activeTabDetails.title}
          description={activeTabDetails.description}
          {...(activeTabDetails.image ? { image: activeTabDetails.image } : activeTabDetails.video ? { video: activeTabDetails.video } : { child: activeTabDetails.child })}
        />
      )}
      {!activeTabContent && !activeTabDetails && (
        <ServiceContent
          title={SERVICES_DATA[0].childrens ? SERVICES_DATA[0].childrens[0].details.title : SERVICES_DATA[0].details.title}
          description={SERVICES_DATA[0].childrens ? SERVICES_DATA[0].childrens[0].details.description : SERVICES_DATA[0].details.description}
          {...(SERVICES_DATA[0].childrens ? SERVICES_DATA[0].childrens[0].details.image ? { image: SERVICES_DATA[0].childrens[0].details.image } : SERVICES_DATA[0].childrens[0].details.video ? { video: SERVICES_DATA[0].childrens[0].details.video } : { child: SERVICES_DATA[0].childrens[0].details.child } : SERVICES_DATA[0].details.image ? { image: SERVICES_DATA[0].details.image } : SERVICES_DATA[0].details.video ? { video: SERVICES_DATA[0].details.video } : { child: SERVICES_DATA[0].details.child })}
        />
      )}
    </div>
  );
};

export default Services;