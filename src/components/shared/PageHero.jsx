import Section, { SectionHeader } from "./Section.jsx"

export default function PageHero({ eyebrow, title, description, children, background = "default" }) {
  const bg =
    background === "muted"
      ? "bg-brand-50"
      : background === "dark"
      ? "bg-brand-800 text-white"
      : "bg-white"
  const titleClass =
    background === "dark"
      ? "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
      : "h-display"
  const descClass =
    background === "dark" ? "text-brand-100" : "text-slate-600"
  const eyebrowClass =
    background === "dark"
      ? "text-xs font-semibold uppercase tracking-[0.18em] text-brand-200"
      : "eyebrow"

  return (
    <section className={bg}>
      <div className="container-x py-14 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && <p className={`${eyebrowClass} mb-3`}>{eyebrow}</p>}
          <h1 className={titleClass}>{title}</h1>
          {description && (
            <p className={`mt-5 text-base md:text-lg leading-relaxed ${descClass}`}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
