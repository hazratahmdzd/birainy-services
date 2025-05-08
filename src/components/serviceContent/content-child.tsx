import { ContentChildProps } from "@/types/components";
import { FC } from "react";
import Image from "next/image";

export const ContentChild: FC<ContentChildProps> = ({
  image,
  video,
  child: ChildElemenet,
}) => {
  return image ? (
    <div className="w-full aspect-[1232/675] rounded-[12px] overflow-hidden relative">
      <Image src={image} alt="content image" fill objectFit="cover" />
    </div>
  ) : video ? (
    <div className="w-full aspect-[1232/675] rounded-[12px] overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  ) : ChildElemenet && (
    <ChildElemenet />
  );
};
