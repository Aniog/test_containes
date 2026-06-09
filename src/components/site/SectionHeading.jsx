const tones = {
  light: {
    eyebrow: 'text-sky-700',
    title: 'text-slate-950',
    description: 'text-slate-600',
  },
  dark: {
    eyebrow: 'text-sky-300',
    title: 'text-white',
    description: 'text-slate-300',
  },
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}) => {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const palette = tones[tone] || tones.light

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] ${palette.eyebrow}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${palette.title}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${palette.description}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
