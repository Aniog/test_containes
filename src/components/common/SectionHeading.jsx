export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  titleId,
  subtitleId,
  className = "",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignment} gap-3 md:gap-4 ${className}`}>
      {eyebrow ? (
        <span className="eyebrow">{eyebrow}</span>
      ) : null}
      <Tag
        id={titleId}
        className="font-serif font-light text-ink text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.01em] max-w-3xl"
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          id={subtitleId}
          className="font-sans text-base md:text-[17px] text-ink-muted leading-relaxed max-w-xl"
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
