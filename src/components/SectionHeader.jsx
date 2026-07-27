const SectionHeader = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description && <p className="text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
    </div>
  )
}

export default SectionHeader
