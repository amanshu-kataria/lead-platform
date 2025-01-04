import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  size: "small" | "medium" | "large";
}

function getSizeAttributes(size: LogoProps["size"]) {
  switch (size) {
    case "small":
      return { width: 40, height: 15 };
    case "medium":
      return { width: 60, height: 23 };
    case "large":
      return { width: 80, height: 30 };
  }
}

export const Logo: FC<LogoProps> = ({ size }) => {
  return (
    <Image
      src="https://cdn.prod.website-files.com/656ddb1f77f5af1d193d7150/656ddd16e17e0d8eed192bed_Group%2037.png"
      alt="Alma logo"
      {...getSizeAttributes(size)}
    />
  );
};
