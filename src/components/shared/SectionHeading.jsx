export default function SectionHeading({ eyebrow, title, description, align = 'left', titleId, descId }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
      >
        {title}
      </h2>
      {description && (
        <p
          id={descId}
          className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed"
        >
          {description}
        </p>
      )}
    </div>
  )
}
