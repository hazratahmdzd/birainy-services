import { FC } from "react";

export interface CreatingWebsiteDataProps {
    title: string;
    description: string;
    image: string;
}

export type ContentChildProps =
  | {
      image: string;
      video?: never;
      child?: never;
    }
  | {
      image?: never;
      video: string;
      child?: never;
    }
  | {
      image?: never;
      video?: never;
      child?: FC;
    };
