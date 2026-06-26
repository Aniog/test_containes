import { cn } from "@/lib/utils";

/**
 * Brand mark for ARTITECT MACHINERY.
 * The "A" is drawn as a folded sheet-metal profile, echoing the product line.
 *
 * Props:
 *   tone – "dark" (default, for light backgrounds) | "light" (for dark surfaces)
 */
export default function Logo({ tone = "dark", className }) {
  const ink = tone === "dark" ? "#0E2A47" : "#F5F2EC";
  const accent = "#C8A165";

  return (
    <span
      className={cn("inline-flex items-center gap-3 select-none", className)}
      aria-label="ARTITECT MACHINERY"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Folded-sheet "A" mark */}
        <path
          d="M14 50 L32 12 L50 50"
          stroke={ink}
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M22 38 L42 38" stroke={ink} strokeWidth="3" strokeLinejoin="round" />
        <path d="M28 50 L32 38 L36 50" stroke={accent} strokeWidth="3" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold text-[15px] tracking-[0.18em]",
            tone === "dark" ? "text-primary" : "text-ink-foreground"
          )}
        >
          ARTITECT
        </span>
        <span
          className={cn(
            "text-[10px] tracking-[0.32em] mt-1",
            tone === "dark" ? "text-muted-foreground" : "text-ink-foreground/60"
          )}
        >
          MACHINERY
        </span>
      </span>
    </span>
  );
}