import React from "react";
import { cn } from "@/lib/utils";

const Container = ({ as = "div", size = "lg", className, children, ...rest }) => {
  const Comp = as;
  const sizes = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    xl: "max-w-[1440px]",
    full: "max-w-none",
  };
  return (
    <Comp className={cn("mx-auto px-6 md:px-10", sizes[size], className)} {...rest}>
      {children}
    </Comp>
  );
};

export default Container;
