export default function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'light' }) {
  const centered = align === 'center'
  const isDark = tone === 'dark'
  const eyebrowClass = isDark ? 'text-amber-300' : 'text-blue-700'
  const titleClass = isDark ? 'text-white' : 'text-slate-950'
  const textClass = isDark ? 'text-slate-300' : 'text-slate-700'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`text-sm font-bold uppercase tracking-[0.24em] ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${titleClass}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-7 md:text-lg ${textClass}`}>{text}</p>}
    </div>
  )
}
