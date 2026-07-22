function SectionHeading({ eyebrow, title, body, align = 'center' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-luxe text-velmora-antique">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-medium leading-tight text-velmora-umber md:text-6xl">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-base leading-8 text-velmora-cocoa md:text-lg">
          {body}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
