import { cn } from "@/lib/utils";

/**
 * Subtle hairline divider with optional centered ornament.
 * Used to separate editorial sections.
 */
export function SectionDivider({ className, withOrnament = false }) {
  return (
    <div className={cn("flex items-center justify-center py-4", className)}>
      {withOrnament ? (
        <div className="flex items-center gap-4 w-full max-w-xs">
          <span className="flex-1 h-px bg-hairline" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="flex-1 h-px bg-hairline" />
        </div>
      ) : (
        <span className="block w-full max-w-3xl h-px bg-hairline" />
      )}
    </div>
  );
}
