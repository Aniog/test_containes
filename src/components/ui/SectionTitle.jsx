import { cn } from "@/lib/utils";

// Renders an editorial section heading block:
//   small uppercase eyebrow
//   large serif headline (italic optional)
//   optional supporting text on the right
export default function SectionTitle({
  eyebrow,
  title,
  italicWord,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
          {eyebrow}
        </span>
      ) : null}
      {title ? (
        <h2
          className={cn(
            "font-serif text-3xl font-light text-espresso sm:text-4xl md:text-[44px] lg:text-[52px]",
            "leading-[1.05]",
            titleClassName
          )}
        >
          {italicWord
            ? renderWithItalic(title, italicWord)
            : title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={cn(
            "max-w-xl text-[15px] leading-relaxed text-espresso-soft",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function renderWithItalic(title, word) {
  const parts = title.split(word);
  if (parts.length === 1) return title;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 ? (
        <em className="italic text-gold-deep">{word}</em>
      ) : null}
    </span>
  ));
}
