import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "text-black focus:ring-2 ring-white text-sm font-semibold font-sans py-4 px-3 transition-colors bg-cyan-500 rounded w-full hover:bg-cyan-300"
      )}
    >
      {children}
    </Comp>
  );
}
