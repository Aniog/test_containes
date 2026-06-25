export default function SectionHeader({ eyebrow, title, description, align = "center", className = "" }) {
  const isCenter = align === "center";
  return (
    <div
      className={
        (isCenter ? "mx-auto text-center max-w-2xl" : "max-w-2xl") +
        " " +
        className
      }
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
