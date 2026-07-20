export default function SectionIntro({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl text-velmora-ink`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-velmora-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-sm leading-7 text-velmora-taupe sm:text-base">{copy}</p> : null}
    </div>
  )
}
