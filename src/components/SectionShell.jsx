export default function SectionShell({ eyebrow, title, intro, children, className = '' }) {
  const dark = className.includes('bg-slate-950') || className.includes('bg-blue-950')
  const eyebrowClass = dark ? 'text-cyan-200' : 'text-blue-700'
  const titleClass = dark ? 'text-white' : 'text-slate-950'
  const introClass = dark ? 'text-slate-200' : 'text-slate-700'

  return (
    <section className={`py-16 lg:py-24 ${dark ? 'text-white' : 'text-slate-950'} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className={`text-sm font-bold uppercase tracking-[0.24em] ${eyebrowClass}`}>{eyebrow}</p>}
            {title && <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${titleClass}`}>{title}</h2>}
            {intro && <p className={`mt-5 text-lg leading-8 ${introClass}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
