const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-velmora-goldDeep">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-serif text-4xl leading-tight text-velmora-espresso md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-velmora-cacao/75 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
