import React, { ReactNode } from "react";

interface FooterContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const FooterContainer: React.FC<FooterContainerProps> = ({ children, ...rest }: FooterContainerProps) => {
  return (
    <div
      className={`w-screen flex bg-gray-800 text-white items-center justify-center py-4 unselectable`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FooterContainer;
