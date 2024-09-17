import React, { ReactNode } from "react";

interface HeaderContainerProps extends React.HTMLAttributes<HTMLDivElement> {
 children: ReactNode
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({children, ...rest}: HeaderContainerProps) => {
 return (
  <div className={`w-screen flex flex-1 bg-[#399284] flex-col  items-center unselectable`} {...rest}>
   {children}
  </div>
 )
}

export default HeaderContainer