import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "text-center mx-auto",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl md:text-5xl text-ink leading-tight">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 font-sans text-base md:text-lg text-mocha/80 leading-relaxed">
          {children}
        </p>
      ) : null}
    </div>
  );
}
