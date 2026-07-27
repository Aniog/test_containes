export default function SectionHeader({ eyebrow, title, text, align = 'left', tone = 'light' }) {
  const centered = align === 'center'
  const isDark = tone === 'dark'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`text-sm font-bold uppercase tracking-wide ${isDark ? 'text-amber-500' : 'text-sky-700'}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-5xl ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-7 md:text-lg ${isDark ? 'text-white/78' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}
