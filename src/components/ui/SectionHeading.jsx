import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, action, align = "left", className }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-10 md:mb-14",
        align === "center" && "items-center text-center",
        align === "between" && "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div>
        {eyebrow && (
          <div className="label-eyebrow text-mute mb-3">{eyebrow}</div>
        )}
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          to={action.to}
          className="text-xs tracking-[0.22em] uppercase text-ink hover:text-gold-dark transition-colors underline-grow self-start md:self-auto"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
