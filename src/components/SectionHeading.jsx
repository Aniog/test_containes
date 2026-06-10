export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  const isCenter = align === "center"
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-sm uppercase tracking-widest font-semibold mb-3 ${light ? "text-gold" : "text-blue-action"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-slate-200" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  )
}
