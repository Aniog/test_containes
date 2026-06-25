const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
