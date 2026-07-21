import React from "react";
import { cn } from "@/lib/utils.js";

/**
 * Placeholder — the warm, editorial gradient that sits behind any image
 * (or in place of one) until the strk-img runtime replaces it.
 */
export function Placeholder({ className = "", children, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 20%, rgba(184,147,90,0.35) 0%, rgba(26,20,16,0) 60%), radial-gradient(80% 60% at 80% 80%, rgba(201,168,118,0.18) 0%, rgba(26,20,16,0) 70%)",
        }}
      />
      {children}
    </div>
  );
}

export default Placeholder;
