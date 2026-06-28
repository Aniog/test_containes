const alignmentMap = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignmentMap[align] || alignmentMap.left}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
