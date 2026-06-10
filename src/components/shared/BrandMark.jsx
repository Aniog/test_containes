import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export function BrandMark({ className, tone = "dark", showText = true, to = "/" }) {
  const isLight = tone === "light"
  const wordColor = isLight ? "text-bone" : "text-ink"
  const subtleColor = isLight ? "text-bone/60" : "text-steel-soft"
  const stroke = isLight ? "#c9a96a" : "#0f1722"
  const accent = isLight ? "#c9a96a" : "#c9a96a"

  return (
    <Link
      to={to}
      aria-label="Artitect Machinery home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center"
      >
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none">
          <path
            d="M14 22 L32 12 L50 22 L50 50 L14 50 Z"
            stroke={stroke}
            strokeWidth="2.4"
            strokeLinejoin="miter"
          />
          <path
            d="M22 50 L22 32 L42 32 L42 50"
            stroke={stroke}
            strokeWidth="2.4"
            strokeLinejoin="miter"
          />
          <line
            x1="32"
            y1="12"
            x2="32"
            y2="50"
            stroke={accent}
            strokeWidth="1.2"
            opacity="0.6"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-[1.35rem] font-medium leading-none",
              wordColor,
            )}
          >
            Artitect
          </span>
          <span
            className={cn(
              "text-[0.65rem] font-medium uppercase tracking-eyebrow mt-1",
              subtleColor,
            )}
          >
            Machinery
          </span>
        </span>
      )}
    </Link>
  )
}
