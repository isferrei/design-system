import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  className,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "text-black focus:ring-2 ring-white text-sm font-semibold font-sans py-3 px-4 transition-colors bg-cyan-500 rounded w-full hover:bg-cyan-300",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
