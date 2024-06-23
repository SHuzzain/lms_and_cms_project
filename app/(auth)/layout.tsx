import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return <main className="h-full">{children}</main>;
};

export default AuthLayout;
