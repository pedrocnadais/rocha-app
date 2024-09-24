import React, { ReactNode } from "react";

interface BodyContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ children, ...rest }: BodyContainerProps) => {
  return (
    <div
      className={`w-screen bg-[#ECF0F1] unselectable`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default BodyContainer;
