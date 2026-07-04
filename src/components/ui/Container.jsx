import React from "react";
import { cn } from "@/lib/utils.js";

const Container = ({ children, className, as: As = "div" }) => (
  <As className={cn("mx-auto w-full max-w-content px-5 sm:px-8 lg:px-14", className)}>
    {children}
  </As>
);

export default Container;
