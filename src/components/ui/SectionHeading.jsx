import { cn } from '@/lib/utils.js'

export default function SectionHeading({
  align = 'left',
  description,
  eyebrow,
  title,
}) {
  return (
    <div className={cn('max-w-2xl space-y-4', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="space-y-3">
        <h2 className="luxe-heading text-4xl leading-tight sm:text-5xl">{title}</h2>
        {description ? (
          <p className="text-base leading-7 text-stone-300 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
