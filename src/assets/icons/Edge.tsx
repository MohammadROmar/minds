import { ComponentPropsWithoutRef } from "react";

export default function EdgeIcon({
  ...props
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="162"
      height="131"
      fill="none"
      viewBox="0 -15 162 131"
      className="portfolio__edge-icon"
      {...props}
    >
      <path
        fill="#ECECED"
        d="M0 131.01l30.66-28.38 45.03-17.5L98.2 44.57 161.6 0v131.01H0z"
      ></path>
    </svg>
  );
}
