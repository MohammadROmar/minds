import { type ComponentPropsWithoutRef } from "react";

function YoutubeIcon({ ...props }: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      fill="var(--color__text)"
      height="2rem"
      width="2rem"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-143 145 512 512"
      {...props}
    >
      <g>
        <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	" />
        <path
          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
		c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
		V446.8z"
        />
      </g>
    </svg>
  );
}

export default YoutubeIcon;
