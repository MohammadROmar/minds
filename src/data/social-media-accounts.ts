import YoutubeIcon from "../assets/icons/Youtube.tsx";
import WhatsappIcon from "../assets/icons/Whatsapp.tsx";
import TelegramIcon from "../assets/icons/Telegram.tsx";
import LinkedInIcon from "../assets/icons/LinkedIn.tsx";
import FacebookIcon from "../assets/icons/Facebook.tsx";
import InstagramIcon from "../assets/icons/Instagram.tsx";

import { type ElementType } from "react";

export type SocialMediaAccount = {
  name: string;
  icon: ElementType;
  color: string;
  link: string;
};

export const socialMediaAccounts: SocialMediaAccount[] = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    color: "#0866fc",
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    color: "#e900d5",
    link: "https://www.instagram.com",
  },
  {
    name: "Youtube",
    icon: YoutubeIcon,
    color: "#ff0500",
    link: "https://www.youtube.com",
  },
  {
    name: "Linked in",
    icon: LinkedInIcon,
    color: "#0989ba",
    link: "https://www.linkedin.com",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    color: "#049bd0",
    link: "https://www.telegram.com",
  },
  {
    name: "WhatsApp",
    icon: WhatsappIcon,
    color: "#3bdf5a",
    link: "https://www.whatsapp.com",
  },
];
