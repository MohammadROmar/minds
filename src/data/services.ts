import { type ElementType } from "react";

import DesignIcon from "../assets/icons/Design.tsx";
import WebDevelopmentIcon from "../assets/icons/WebDevelopment.tsx";
import MobileDevelopmentIcon from "../assets/icons/MobileDevelopment.tsx";

type service = {
  title: string;
  icon: ElementType;
};

export const services: service[] = [
  {
    title: "Web Development",
    icon: WebDevelopmentIcon
  },
  {
    title: "Mobile Development",
    icon: MobileDevelopmentIcon
  },
  {
    title: "Branding & Design",
    icon: DesignIcon
  }
];
