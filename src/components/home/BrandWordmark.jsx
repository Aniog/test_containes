import React from "react";
import { cn } from "@/lib/utils";

export default function BrandWordmark({ className, tone = "dark" }) {
  const inkColor = tone === "dark" ? "text-ink" : "text-paper";
  const accentColor = tone === "dark" ? "text-brass-deep" : "text-brass";
  const lineColor = tone === "dark" ? "bg-brass" : "bg-brass";

  return (
    <a
      href="#top"
      aria-label="ARTITECT MACHINERY — home"
      className={cn("inline-flex items-center gap-3 group", className)}
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className={cn("absolute inset-0 border", lineColor)} />
        <span className={cn("absolute inset-1 border", lineColor, "opacity-60")} />
        <span className={cn("font-display text-lg font-bold leading-none", inkColor)}>
          A
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-[0.18em]",
            inkColor
          )}
        >
          ARTITECT
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.4em]",
            accentColor
          )}
        >
          Machinery
        </span>
      </span>
    </a>
  );
}
