const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-velmora-goldDark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-medium leading-none text-velmora-espresso sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-velmora-taupe md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
