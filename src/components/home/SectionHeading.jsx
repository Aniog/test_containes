export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-widest3 ${light ? "text-gold-light" : "text-gold"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-serif text-4xl md:text-5xl ${light ? "text-ivory" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${light ? "text-ivory/70" : "text-stone"}`}>{subtitle}</p>
      )}
    </div>
  )
}
