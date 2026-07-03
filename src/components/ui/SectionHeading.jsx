import { cn } from '../../lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={cn('max-w-2xl space-y-3', alignment, className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl leading-none text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-stone md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
