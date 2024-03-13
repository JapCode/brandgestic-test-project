import { ReactNode } from "react";

interface IMaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: IMaxWidthWrapperProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 lg:max-w-screen-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
