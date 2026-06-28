function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignment}>
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
