import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export default function Logo({ tone = "bone", className = "" }) {
  const color = tone === "bone" ? "text-bone" : "text-ink"
  return (
    <Link
      to="/"
      aria-label="Velmora — home"
      className={cn(
        "font-serif tracking-[0.32em] text-[15px] md:text-[16px] font-medium select-none",
        color,
        className
      )}
    >
      VELMORA
    </Link>
  )
}
