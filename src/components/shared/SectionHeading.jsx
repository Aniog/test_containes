export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const titleColor = light ? 'text-porcelain' : 'text-obsidian'
  const copyColor = light ? 'text-porcelain/75' : 'text-espresso/80'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className={`eyebrow ${light ? 'text-champagne' : ''}`}>{eyebrow}</p> : null}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className={`space-y-4 ${align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}>
          <h2 className={`section-title ${titleColor}`}>{title}</h2>
          {description ? <p className={`section-copy ${copyColor}`}>{description}</p> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
    </div>
  )
}
