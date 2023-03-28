import { HTMLAttributes, ReactNode } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({ children, ...input }: IContainer) => {
  return (
    <main className={`container mx-auto px-5 sm:pt-10 ${input.className}`}>
      {children}
    </main>
  );
};
