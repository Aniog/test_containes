export default function SectionHeader({ label, title, description, centered = false }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-lg text-slate-600 leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
