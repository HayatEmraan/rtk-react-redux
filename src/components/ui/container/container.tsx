import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen w-full p-2">{children}</div>
  );
};

export default Container;
