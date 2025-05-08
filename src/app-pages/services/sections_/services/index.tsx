import React, { FC } from "react";
import { ServiceAccordion, ServiceContent } from "@/components";
import { useSearchParams } from "next/navigation";
import { SERVICES_DATA } from "@/config/constants";

interface ServiceSectionProps {
  id: string;
  tab: string;
}

export const Services: FC<ServiceSectionProps> = ({id, tab}) => {

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
    </div>
  );
};