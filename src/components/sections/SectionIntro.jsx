export default function SectionIntro({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const centered = align === 'center'
  const isDark = tone === 'dark'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${isDark ? 'text-cyan-100' : 'text-brand-cyan'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 md:text-lg ${isDark ? 'text-slate-200' : 'text-brand-slate'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
