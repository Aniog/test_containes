const SectionHeader = ({ eyebrow, title, copy, align = 'center' }) => {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto mb-10 flex max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-brass">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-medium leading-tight text-velmora-ink md:text-6xl">
        {title}
      </h2>
      {copy && <p className="max-w-2xl text-base leading-7 text-velmora-smoke md:text-lg">{copy}</p>}
    </div>
  )
}

export default SectionHeader
