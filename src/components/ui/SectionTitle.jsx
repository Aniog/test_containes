import Eyebrow from "./Eyebrow.jsx";

export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={alignClass}>
      {eyebrow && <Eyebrow tone="gold">{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="mt-4 font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[48px]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 max-w-lg font-sans text-[14px] leading-relaxed text-ink-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
