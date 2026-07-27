const alignmentClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

const toneClasses = {
  light: {
    eyebrow: 'text-blue-600',
    title: 'text-slate-950',
    description: 'text-slate-700',
  },
  dark: {
    eyebrow: 'text-blue-200',
    title: 'text-white',
    description: 'text-slate-300',
  },
}

function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const colors = toneClasses[tone] || toneClasses.light

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignmentClasses[align] || alignmentClasses.left}`}>
      {eyebrow ? (
        <span className={`text-sm font-semibold uppercase tracking-[0.18em] ${colors.eyebrow}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${colors.title}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-7 sm:text-lg ${colors.description}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
