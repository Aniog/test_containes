export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag
        className={`mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink ${
          isCenter ? "" : ""
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-brand-muted">
          {description}
        </p>
      )}
    </div>
  );
}
