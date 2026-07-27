import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  descriptionId,
  align = "left",
  className,
}) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        alignment,
        className,
      )}
    >
      {eyebrow ? (
        <span className="eyebrow" id={titleId ? `${titleId}-eyebrow` : undefined}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          id={descriptionId}
          className="text-base text-muted-foreground sm:text-lg"
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
