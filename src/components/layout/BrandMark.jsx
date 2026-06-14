import * as React from "react"
import { cn } from "@/lib/utils"

export function BrandMark({ className, showText = true, compact = false }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-9 h-9 rounded-md bg-slate-850 border border-line flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="w-5 h-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 23 L16 7 L26 23 Z"
            stroke="#D4A24C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M10 23 L16 13 L22 23"
            stroke="#E6EBF2"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="leading-none">
          <div
            className={cn(
              "font-semibold tracking-[0.14em] text-text",
              compact ? "text-sm" : "text-base"
            )}
          >
            ARTITECT
          </div>
          <div
            className={cn(
              "tracking-[0.32em] text-text-dim mt-1",
              compact ? "text-[9px]" : "text-[10px]"
            )}
          >
            MACHINERY
          </div>
        </div>
      )}
    </div>
  )
}
