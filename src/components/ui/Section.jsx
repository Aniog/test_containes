import React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable section wrapper.
 * <Section> — vertical padding, ivory background
 * <Section tone="ink"> — dark warm background
 * <Section tone="surface"> — slightly elevated card surface
 */
const Section = React.forwardRef(function Section(
  { tone = "ivory", size = "lg", as = "section", className, children, ...rest },
  ref
) {
  const Comp = as;
  const sizes = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
    xl: "py-24 md:py-40",
  };
  const tones = {
    ivory: "bg-ivory text-ink",
    surface: "bg-surface text-ink",
    ink: "bg-ink text-ivory",
    mocha: "bg-mocha text-ivory",
  };
  return (
    <Comp
      ref={ref}
      className={cn("w-full", sizes[size], tones[tone], className)}
      {...rest}
    >
      {children}
    </Comp>
  );
});

export default Section;
