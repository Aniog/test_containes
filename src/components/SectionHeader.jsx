export default function SectionHeader({ eyebrow, title, description, align = 'left', id }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B6FB8]">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="mt-3 text-3xl font-bold tracking-tight text-[#0B2545] md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
