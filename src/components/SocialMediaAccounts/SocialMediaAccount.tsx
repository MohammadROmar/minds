import { CSSProperties } from "react";

import { type SocialMediaAccount } from "../../data/social-media-accounts.ts";

type SocialMediaAccountPorps = { account: SocialMediaAccount };

export default function SocialMediaAccount({
  account,
}: SocialMediaAccountPorps) {
  const { name, link, color, icon: Icon } = account;

  return (
    <li className="social-media-account">
      <a
        data-name={name}
        href={link}
        target="_blank"
        style={
          {
            textDecoration: "none",
            "--fill-color": color,
          } as CSSProperties
        }
        className="social-media-account__link"
      >
        <Icon className="social-media-account__icon" />
      </a>
    </li>
  );
}
