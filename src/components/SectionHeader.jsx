const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) => {
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  const styles =
    theme === 'dark'
      ? {
          eyebrow: 'bg-white/10 text-slate-200',
          title: 'text-white',
          description: 'text-slate-300',
        }
      : {
          eyebrow: 'bg-blue-100 text-blue-800',
          title: 'text-slate-900',
          description: 'text-slate-600',
        }

  return (
    <div className={alignment}>
      {eyebrow ? (
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`mt-4 text-3xl font-bold tracking-tight md:text-4xl ${styles.title}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${styles.description}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
