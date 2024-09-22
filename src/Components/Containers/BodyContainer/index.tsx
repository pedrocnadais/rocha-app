import React, { ReactNode } from "react";

interface BodyContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ children, ...rest }: BodyContainerProps) => {
  return (
    <div
      className={`w-screen bg-[#94d0c7] unselectable overflow-x-auto`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default BodyContainer;
