const SectionHeading = ({ eyebrow, title, description, align = 'left', theme = 'light' }) => {
  const centered = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-8 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{description}</p>
      )}
    </div>
  )
}

export default SectionHeading
