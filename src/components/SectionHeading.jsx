const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false }) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className={`text-xs uppercase tracking-[0.35em] ${light ? 'text-amber-200' : 'text-stone-500'}`}>
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className={`font-editorial text-4xl leading-none md:text-5xl ${light ? 'text-stone-50' : 'text-stone-950'}`}>
          {title}
        </h2>
        {description ? (
          <p className={`max-w-xl text-sm leading-7 md:text-base ${light ? 'text-stone-300' : 'text-stone-600'}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
