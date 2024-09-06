import { Blurhash } from "react-blurhash";
import { ComponentPropsWithoutRef, CSSProperties, useState } from "react";

type LazyHashImageProps = {
  src: string;
  alt?: string;
  hash: string;
} & ComponentPropsWithoutRef<"img">;

export default function LazyHashImage({
  src,
  alt,
  hash,
  ...props
}: LazyHashImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const style: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <>
      {!isLoaded && <Blurhash hash={hash} style={style} />}
      <img src={src} alt={alt} {...props} onLoad={() => setIsLoaded(true)} />
    </>
  );
}
