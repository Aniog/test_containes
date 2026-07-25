export default function SectionHeading({ eyebrow, title, copy, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serifDisplay text-4xl font-medium leading-tight text-velmora-espresso md:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-ink/75 md:text-base">
          {copy}
        </p>
      )}
    </div>
  )
}
