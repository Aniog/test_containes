const SectionIntro = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl space-y-3 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="text-balance text-4xl text-foreground-strong sm:text-5xl">{title}</h2>
      <p className="text-sm leading-7 text-muted sm:text-base">{description}</p>
    </div>
  )
}

export default SectionIntro
