import { type ComponentPropsWithoutRef } from "react";

import SocialMediaAccount from "./SocialMediaAccount.tsx";

import { socialMediaAccounts } from "../../data/social-media-accounts.ts";

import "./SocialMediaAccounts.css";

export default function SocialMediaAccounts({
  ...props
}: ComponentPropsWithoutRef<"ul">) {
  const accounts = socialMediaAccounts.map((account) => (
    <SocialMediaAccount key={account.name} account={account} />
  ));

  return (
    <ul style={{ listStyle: "none" }} {...props}>
      {accounts}
    </ul>
  );
}
