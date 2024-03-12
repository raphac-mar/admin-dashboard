import { useTheme } from "next-themes";
import Image from "next/image";

export const SideBarLogo = () => {
  const { theme } = useTheme();
  return (
    <Image
      width={170}
      alt=""
      className="min-h-fit"
      height={40}
      src={theme === "dark" || theme === "custom" ? "/logo2.png" : "/logo1.png"}
    />
  );
};
