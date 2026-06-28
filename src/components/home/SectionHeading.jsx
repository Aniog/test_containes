export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}) {
  const isCentered = align === 'center'
  const eyebrowClass = tone === 'dark' ? 'text-stone-400' : 'text-stone-500'
  const titleClass = tone === 'dark' ? 'text-stone-50' : 'text-stone-950'
  const bodyClass = tone === 'dark' ? 'text-stone-300' : 'text-stone-600'

  return (
    <div className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`text-xs uppercase tracking-[0.36em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-[Cormorant_Garamond] text-5xl leading-none sm:text-6xl ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-sm leading-7 sm:text-base ${bodyClass}`}>
          {description}
        </p>
      )}
    </div>
  )
}
