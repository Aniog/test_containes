export default function SectionHeader({ eyebrow, title, description, align = 'left', titleId, descId }) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-line text-[11px] font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </div>
      )}
      <h2 id={titleId} className="mt-3 text-3xl sm:text-4xl font-bold text-brand leading-tight">
        {title}
      </h2>
      {description && (
        <p id={descId} className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
