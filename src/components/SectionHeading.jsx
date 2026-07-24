export default function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <div className={`reveal flex flex-col ${alignCls}`}>
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
          {sub}
        </p>
      )}
    </div>
  )
}
