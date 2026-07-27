export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {description && <p className="text-lg text-slate-600">{description}</p>}
    </div>
  );
}
