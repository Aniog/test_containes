import { cn } from "@/lib/utils";
import Container from "./Container";

const TONES = {
  default: "bg-bg text-ink",
  surface: "bg-surface text-ink",
  primary: "bg-primary text-white",
  primaryDark: "bg-primary-700 text-white",
  soft: "bg-primary-100/60 text-ink",
};

export default function Section({
  as: As = "section",
  tone = "default",
  className,
  containerClassName,
  children,
  ...rest
}) {
  return (
    <As className={cn("py-16 md:py-24", TONES[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </As>
  );
}

export function SectionHeader({ eyebrow, title, lead, align = "left", tone }) {
  const isDark = tone === "primary" || tone === "primaryDark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-accent" : "text-accent"
          )}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            "mt-3 text-3xl md:text-4xl font-bold tracking-tight",
            isDark ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            isDark ? "text-white/80" : "text-muted"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
