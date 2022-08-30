import Image from "next/image";
import { Dashboard } from "./Dashboard";

interface ImageProps {
  src: string;
  alt: string;
}

export const HalfImageDashboardLayout = ({
  children,
  imageProps,
}: React.PropsWithChildren<{ imageProps: ImageProps }>) => {
  return (
    <Dashboard>
      <div className="col-start-1 col-end-7 p-8">{children}</div>
      <div className="w-50 relative -ml-4 -mr-8 col-start-7 col-end-13 rounded-r-lg overflow-hidden">
        <Image
          className="transition duration-500 hover:scale-105"
          src={imageProps.src}
          alt={imageProps.alt}
          layout="fill"
          object-fit="cover"
          priority
        />
      </div>
    </Dashboard>
  );
};
