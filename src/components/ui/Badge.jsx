import React from "react";
import { cn } from "@/lib/utils";

export default function Badge({ tone = "espresso", className, children }) {
  const tones = {
    espresso: "bg-espresso text-bone",
    champagne: "bg-champagne text-espresso",
    outline: "border border-line bg-transparent text-espresso",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-label font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}