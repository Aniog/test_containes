const SectionHeader = ({ eyebrow, title, description, align = 'left', action }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-brand-gold">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-serif text-4xl leading-none text-brand-text sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  )
}

export default SectionHeader
