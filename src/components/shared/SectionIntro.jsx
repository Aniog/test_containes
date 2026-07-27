export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  const titleClass = light ? 'text-white' : 'text-slate-900'
  const descriptionClass = light ? 'text-slate-300' : 'text-slate-600'
  const eyebrowClass = light ? 'text-blue-300' : 'text-blue-700'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 sm:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  )
}
