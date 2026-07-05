import React from "react";
import { cn } from "@/lib/utils";

/**
 * A thin decorative divider.
 * <Hairline />         — full-width hairline
 * <Hairline label />   — hairline with centered uppercase label
 */
const Hairline = ({ className, label, tone = "ink", labelClassName }) => {
  const lineClass = cn(
    "h-px flex-1",
    tone === "ink" && "bg-ink/15",
    tone === "ivory" && "bg-ivory/20",
    tone === "gold" && "bg-gold/50"
  );
  if (!label) {
    return <div className={cn("w-full", className)} aria-hidden="true">
      <div className={lineClass} />
    </div>;
  }
  return (
    <div className={cn("flex items-center gap-4", className)} aria-hidden="true">
      <div className={lineClass} />
      <span
        className={cn(
          "font-sans uppercase tracking-eyebrow text-[10px] text-taupe shrink-0",
          labelClassName
        )}
      >
        {label}
      </span>
      <div className={lineClass} />
    </div>
  );
};

export default Hairline;
