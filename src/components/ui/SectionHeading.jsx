function SectionHeading({ eyebrow, title, description, align = 'left', inverse = false }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={inverse ? 'eyebrow text-ivory/70' : 'eyebrow'}>{eyebrow}</p>
      ) : null}
      <h2
        className={[
          'mt-3 font-serif text-4xl leading-none md:text-5xl',
          inverse ? 'text-ivory' : 'text-ink',
        ].join(' ')}
      >
        {title}
      </h2>
      {description ? (
        <p className={inverse ? 'mt-4 text-base text-ivory/80 md:text-lg' : 'mt-4 text-base text-truffle md:text-lg'}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
