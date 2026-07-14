export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', idPrefix }) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p
          id={idPrefix ? `${idPrefix}-eyebrow` : undefined}
          className="mb-3 text-xs font-semibold uppercase tracking-label text-velmora-goldDark"
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={idPrefix ? `${idPrefix}-title` : undefined}
        className="font-serif text-4xl font-medium leading-tight text-velmora-ink sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          id={idPrefix ? `${idPrefix}-subtitle` : undefined}
          className="mt-4 text-base leading-8 text-velmora-cocoa/80 sm:text-lg"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
